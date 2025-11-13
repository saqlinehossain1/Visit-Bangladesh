const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// CORS Configuration - Allow frontend to access backend
app.use(cors({
  origin: 'http://localhost:3001', // Your frontend URL
  credentials: true
}));

app.use(express.json());

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working' });
});

// Sample route for tourist spots
app.get('/api/spots', (req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: 1,
        name: "Cox's Bazar",
        category: "Beach",
        rating: 4.8,
        description: "World's longest natural sea beach"
      },
      {
        id: 2,
        name: "Sundarbans",
        category: "Nature",
        rating: 4.9,
        description: "Largest mangrove forest in the world"
      }
    ]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

**backend/.env:**
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key