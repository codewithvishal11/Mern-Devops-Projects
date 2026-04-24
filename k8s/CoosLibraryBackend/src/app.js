const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const noteRoutes = require('./routes/noteRouter');
const helpRoutes = require('./routes/helpRouter');

dotenv.config();
const app = express();

//Middlewares
app.use(cors({
  origin: ["https://coos-library-frontend-mu2z.vercel.app"], // your frontend's URL
  credentials: true,               // allow cookies/auth headers
}));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/help", helpRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = app;