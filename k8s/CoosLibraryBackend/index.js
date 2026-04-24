const dotenv = require('dotenv');
const connectDB = require('./config/db'); // path correct
const app = require('./src/app'); // <-- correct if app.js is in same folder

dotenv.config();

//connect MongoDB
connectDB();

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));