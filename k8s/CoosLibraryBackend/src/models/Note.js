const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
    {
    img: { type: String, },
    category: { type: String, required: true, trim: true },
    class: {type: String, require: true, trim: true},
    name: { type: String, required: true, trim: true },
    a_name: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    n_price: { type: Number, required: true },
    about: { type: String, required: true, trim: true },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    pages: { type: Number, required: true },
    language: { type: String, required: true, trim: true },
    publisher: { type: String, required: true, trim: true },
    published_year: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Note || mongoose.model("Note", noteSchema);