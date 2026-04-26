import clientPromise from "@/lib/mongodb";

export async function getCollectionData(collectionName) {
  try {
    const client = await clientPromise;
    const db = client.db("nestvibe"); // Uses the DB name from your screenshot

    const data = await db
      .collection(collectionName)
      .find({})
      .sort({ createdAt: -1 }) // Shows newest listings first
      .toArray();

    // Mapping to ensure compatibility with Next.js and your UI
    return data.map(item => ({
      ...item,
      _id: item._id.toString(), // Crucial for Serializing
      // Ensure numeric fields exist for your UI counts/sorting
      priceNumeric: item.priceNumeric || 0, 
      beds: item.beds || 0,
      baths: item.baths || 0,
    }));
    
  } catch (error) {
    console.error("Database Error:", error);
    return [];
  }
}


export async function getBlogs() {
  try {
    const client = await clientPromise;
    const db = client.db("nestvibe");
    const blogs = await db.collection("blogs")
      .find({})
      .sort({ publishedAt: -1 })
      .toArray();

    return blogs.map(post => ({
      ...post,
      _id: post._id.toString(),
    }));
  } catch (error) {
    console.error("Blog fetch error:", error);
    return [];
  }
}