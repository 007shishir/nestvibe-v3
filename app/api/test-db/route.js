export async function GET(req) {
  return new Response(JSON.stringify({ 
    envVarDefined: !!process.env.MONGODB_URI,
    envVarValue: process.env.MONGODB_URI ? process.env.MONGODB_URI.substring(0, 15) + '...' : null
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
