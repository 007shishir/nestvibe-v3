import clientPromise from '@/lib/mongodb';
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db('nestvibe');
    const data = await req.json();

    const newLead = { ...data, createdAt: new Date() };
    const result = await db.collection('leads').insertOne(newLead);

    return new Response(JSON.stringify({ success: true, lead: { ...newLead, _id: result.insertedId } }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Lead Submission Error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function GET(req) {
  try {
    // Admin only endpoint
    const token = cookies().get('auth-token')?.value;
    if (!token) {
      return new Response(JSON.stringify({ success: false, error: 'Unauthorized' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
    }
    
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback_secret');
    const { payload } = await jwtVerify(token, secret);
    
    if (payload.role !== 'admin') {
      return new Response(JSON.stringify({ success: false, error: 'Forbidden - Admin only' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
    }

    const client = await clientPromise;
    const db = client.db('nestvibe');
    const leads = await db.collection('leads').find({}).sort({ createdAt: -1 }).toArray();
    
    return new Response(JSON.stringify({ success: true, leads }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
