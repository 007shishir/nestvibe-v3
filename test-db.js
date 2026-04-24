const mongoose = require('mongoose');

async function testConnection() {
  const uri = "mongodb+srv://islam7saiful_db_user:x2WiXQjTu7rV6zYK@cluster0.iorkz4c.mongodb.net/nestvibe?retryWrites=true&w=majority";
  
  console.log('Testing connection with Mongoose...');
  
  try {
    await mongoose.connect(uri);
    console.log('Successfully connected to MongoDB via Mongoose!');
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Collections:', collections.map(c => c.name));
  } catch (error) {
    console.error('Mongoose connection failed:', error);
  } finally {
    await mongoose.disconnect();
  }
}

testConnection();
