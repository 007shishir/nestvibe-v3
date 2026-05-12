import mongoose from 'mongoose';

const PropertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  location: { type: String, required: true },
  beds: { type: Number, required: true },
  baths: { type: Number, required: true },
  size: { type: String, required: true },
  images: [{ type: String }], // Array to support multiple images
  image: { type: String }, // Keep for backward compatibility
  type: { type: String, enum: ['Buy', 'Rent'], required: true },
  category: { type: String, enum: ['Residential', 'Commercial'], default: 'Residential' },
  featured: { type: Boolean, default: false },
  trending: { type: Boolean, default: false },
  verified: { type: Boolean, default: false },
  broker: { type: String, default: 'NestVibe Realty' },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Property || mongoose.model('Property', PropertySchema);
