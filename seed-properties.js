const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  title: String,
  price: String,
  priceNumeric: Number,
  location: String,
  beds: Number,
  baths: Number,
  size: String,
  image: String,
  type: { type: String, enum: ['Rent', 'Buy'] },
  category: { type: String, enum: ['Residential', 'Commercial'], default: 'Residential' },
  featured: { type: Boolean, default: false },
  trending: { type: Boolean, default: false },
  verified: { type: Boolean, default: false },
  broker: { type: String, default: 'NestVibe Realty' },
  description: String,
  createdAt: { type: Date, default: Date.now }
});

const Property = mongoose.models.Property || mongoose.model('Property', PropertySchema);

const properties = [
  {
    title: "Premium Duplex in Gulshan 2",
    price: "BDT 8,50,00,000",
    priceNumeric: 85000000,
    location: "Gulshan 2, Dhaka",
    beds: 5, baths: 6, size: "4500 sqft",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
    type: "Buy", category: "Residential", featured: true, trending: true, verified: true,
    description: "Magnificent duplex with private elevator and city views."
  },
  {
    title: "Modern Apartment in Banani",
    price: "BDT 3,20,00,000",
    priceNumeric: 32000000,
    location: "Block H, Banani, Dhaka",
    beds: 3, baths: 3, size: "2200 sqft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    type: "Buy", category: "Residential", featured: false, trending: true, verified: true,
    description: "Stylish 3-bedroom flat in a prime location."
  },
  {
    title: "Luxury Penthouse in Baridhara",
    price: "BDT 12,00,00,000",
    priceNumeric: 120000000,
    location: "Baridhara DOHS, Dhaka",
    beds: 4, baths: 5, size: "5200 sqft",
    image: "https://images.unsplash.com/photo-1600607687940-c52af0453724?auto=format&fit=crop&q=80&w=1200",
    type: "Buy", category: "Residential", featured: true, trending: false, verified: true,
    description: "Exclusive penthouse with landscaped terrace."
  },
  {
    title: "Corporate Office Space in Gulshan 1",
    price: "BDT 15,00,00,000",
    priceNumeric: 150000000,
    location: "Gulshan 1, Dhaka",
    beds: 0, baths: 4, size: "6000 sqft",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    type: "Buy", category: "Commercial", featured: false, trending: false, verified: true,
    description: "Prime commercial space for large organizations."
  },
  {
    title: "Compact 2BR Flat in Mirpur",
    price: "BDT 65,00,000",
    priceNumeric: 6500000,
    location: "Section 12, Mirpur, Dhaka",
    beds: 2, baths: 2, size: "1100 sqft",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200",
    type: "Buy", category: "Residential", featured: false, trending: false, verified: false,
    description: "Affordable family home in a growing neighborhood."
  },
  // RENT PROPERTIES
  {
    title: "Modern 3BR Apartment in Dhanmondi",
    price: "BDT 45,000 / month",
    priceNumeric: 45000,
    location: "Road 27, Dhanmondi, Dhaka",
    beds: 3, baths: 3, size: "1800 sqft",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200",
    type: "Rent", category: "Residential", featured: true, trending: true, verified: true,
    description: "Spacious apartment with modern fittings in a quiet area."
  },
  {
    title: "Studio Apartment in Banani",
    price: "BDT 25,000 / month",
    priceNumeric: 25000,
    location: "Block C, Banani, Dhaka",
    beds: 1, baths: 1, size: "650 sqft",
    image: "https://images.unsplash.com/photo-1536376074432-8d63d592bf0d?auto=format&fit=crop&q=80&w=1200",
    type: "Rent", category: "Residential", featured: false, trending: true, verified: true,
    description: "Perfect for young professionals, close to the commercial hub."
  },
  {
    title: "Commercial Shop in Uttara",
    price: "BDT 80,000 / month",
    priceNumeric: 80000,
    location: "Sector 3, Uttara, Dhaka",
    beds: 0, baths: 1, size: "450 sqft",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    type: "Rent", category: "Commercial", featured: false, trending: false, verified: true,
    description: "Prime retail space on a busy main road."
  }
];

async function seed() {
  const uri = "mongodb+srv://islam7saiful_db_user:x2WiXQjTu7rV6zYK@cluster0.iorkz4c.mongodb.net/nestvibe?retryWrites=true&w=majority";
  
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(uri);
    console.log("Connected Successfully!");

    await Property.deleteMany({});
    console.log("Cleared existing collection.");

    await Property.insertMany(properties);
    console.log(`Successfully seeded ${properties.length} properties!`);

    process.exit(0);
  } catch (err) {
    console.error("Connection Error:", err.message);
    process.exit(1);
  }
}

seed();
