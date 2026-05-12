import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';
import clientPromise from '@/lib/mongodb';

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db('nestvibe');
    
    const { searchParams } = new URL(req.url);
    const featured = searchParams.get('featured');
    const trending = searchParams.get('trending');
    const type = searchParams.get('type');
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const beds = searchParams.get('beds');
    const baths = searchParams.get('baths');
    
    const limit = parseInt(searchParams.get('limit')) || 0;
    
    let query = {};
    if (featured === 'true') query.featured = true;
    if (trending === 'true') query.trending = true;
    
    if (type) {
      query.type = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
    }
    if (category) {
      query.category = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
    }
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } }
      ];
    }

    // Numerical Filters
    if (beds) query.beds = { $gte: parseInt(beds) };
    if (baths) query.baths = { $gte: parseInt(baths) };

    // Price Filtering (Assuming numericPrice field or similar)
    // If not exists, we'll try to match the string for now or suggest data update
    if (minPrice || maxPrice) {
      query.priceNumeric = {};
      if (minPrice) query.priceNumeric.$gte = parseInt(minPrice);
      if (maxPrice) query.priceNumeric.$lte = parseInt(maxPrice);
    }

    const properties = await db.collection('properties')
      .find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .toArray();

    return new Response(JSON.stringify({ success: true, properties }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: 'Database connection failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(req) {
  try {
    const token = cookies().get('auth-token')?.value;
    if (!token) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback_secret');
    const { payload } = await jwtVerify(token, secret);
    
    if (payload.role !== 'admin') {
      return new Response(JSON.stringify({ error: 'Forbidden - Admin only' }), { status: 403 });
    }

    const client = await clientPromise;
    const db = client.db('nestvibe');
    
    const body = await req.json();
    
    // Auto-generate numeric price if not provided but string price is
    if (!body.priceNumeric && body.price) {
      const match = body.price.match(/\d+/g);
      if (match) {
        body.priceNumeric = parseInt(match.join(''));
      }
    }

    body.createdAt = new Date();

    const result = await db.collection('properties').insertOne(body);

    return new Response(JSON.stringify({ success: true, property: { ...body, _id: result.insertedId } }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: 'Failed to create property' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
