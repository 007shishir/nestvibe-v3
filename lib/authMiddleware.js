import { jwtVerify } from 'jose';

export async function verifyToken(request) {
  try {
    const token = request.cookies.get('auth-token')?.value;
    
    if (!token) {
      return null;
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback_secret');
    const { payload } = await jwtVerify(token, secret);
    
    return payload;
  } catch (error) {
    return null;
  }
}

export async function requireAdmin(request) {
  const user = await verifyToken(request);
  
  if (!user || user.role !== 'admin') {
    return null;
  }
  
  return user;
}

export async function requireAuth(request) {
  const user = await verifyToken(request);
  
  if (!user) {
    return null;
  }
  
  return user;
}
