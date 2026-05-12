import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

async function verifyAdmin() {
  const token = cookies().get('auth-token')?.value;
  if (!token) throw new Error('Unauthorized');
  const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback_secret');
  const { payload } = await jwtVerify(token, secret);
  if (payload.role !== 'admin') throw new Error('Forbidden - Admin only');
}

export async function GET(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db('nestvibe');
    const { id } = params;

    const property = await db.collection('properties').findOne({ _id: new ObjectId(id) });

    if (!property) {
      return new Response(JSON.stringify({ success: false, error: 'Property not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true, property }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: 'Failed to fetch property' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function PUT(req, { params }) {
  try {
    await verifyAdmin();
    const client = await clientPromise;
    const db = client.db('nestvibe');
    const { id } = params;

    const body = await req.json();

    // Auto-generate numeric price if not provided but string price is
    if (!body.priceNumeric && body.price) {
      const match = body.price.match(/\d+/g);
      if (match) {
        body.priceNumeric = parseInt(match.join(''));
      }
    }

    // Remove _id from body to prevent immutable field errors
    delete body._id;

    const result = await db.collection('properties').updateOne(
      { _id: new ObjectId(id) },
      { $set: body }
    );

    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ success: false, error: 'Property not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true, message: 'Property updated' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: 'Failed to update property' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function DELETE(req, { params }) {
  try {
    await verifyAdmin();
    const client = await clientPromise;
    const db = client.db('nestvibe');
    const { id } = params;

    const result = await db.collection('properties').deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ success: false, error: 'Property not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true, message: 'Property deleted' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: 'Failed to delete property' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
