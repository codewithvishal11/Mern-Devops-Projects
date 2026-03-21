// BookForm.tsx
import { useState } from "react";
import {postNote} from '../services/noteService';

const BookForm = () => {
  const [formData, setFormData] = useState({
    img: "",
    category: "",
    name: "",
    class: "",
    a_name: "",
    price: 0,
    n_price: 0,
    about: "",
    rating: 0,
    pages: 0,
    language: "",
    publisher: "",
    published_year: new Date().getFullYear(),
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" || name === "n_price" || name === "rating" || name === "pages" || name === "published_year"
        ? Number(value)
        : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await postNote(formData);
      setMessage("Book added successfully!");
      console.log(res.data);
      // Reset form
      setFormData({
        img: "",
        category: "",
        name: "",
        class: "",
        a_name: "",
        price: 0,
        n_price: 0,
        about: "",
        rating: 0,
        pages: 0,
        language: "",
        publisher: "",
        published_year: new Date().getFullYear(),
      });
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">Add New Book</h2>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Image URL"
          name="img"
          value={formData.img}
          onChange={handleChange}
          className="w-full p-2 border rounded"
         
        />
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Book Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Class"
          name="class"
          value={formData.class}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Author Name"
          name="a_name"
          value={formData.a_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Normal Price"
          name="n_price"
          value={formData.n_price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="About"
          name="about"
          value={formData.about}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          step="0.1"
          placeholder="Rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Pages"
          name="pages"
          value={formData.pages}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Language"
          name="language"
          value={formData.language}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Publisher"
          name="publisher"
          value={formData.publisher}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Published Year"
          name="published_year"
          value={formData.published_year}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Saving..." : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default BookForm;