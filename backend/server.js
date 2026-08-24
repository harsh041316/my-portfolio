const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Project = require('./models/Project');
const Contact = require('./models/Contact');

const app = express();

app.use(cors());
app.use(express.json());

// Root test
app.get('/', (req, res) => {
  res.send('Backend is running properly!');
});

// GET all projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// SEED ROUTE
app.get('/api/seed', async (req, res) => {
  try {
    const count = await Project.countDocuments();
    if (count === 0) {
      await Project.insertMany([
        {
          title: "E-Commerce Platform",
          description: "A full-featured MERN web platform with product search, cart, Stripe checkout, and admin panel.",
          tags: [{ name: "MERN", color: "text-cyan-400" }, { name: "Redux", color: "text-purple-400" }],
          sourceCodeLink: "https://github.com",
          liveDemoLink: "https://google.com"
        },
        {
          title: "Career & Freelance Hub",
          description: "Web application allowing users to find developers with matching interests and explore jobs.",
          tags: [{ name: "React", color: "text-blue-400" }, { name: "Node.js", color: "text-emerald-400" }],
          sourceCodeLink: "https://github.com",
          liveDemoLink: "https://google.com"
        }
      ]);
      return res.send("<h2>Projects Seeded Successfully! Check your frontend.</h2>");
    }
    res.send(`<h2>Database already has ${count} projects. Ready to go!</h2>`);
  } catch (err) {
    res.status(500).send(`<h2>Error: ${err.message}</h2>`);
  }
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(200).json({ success: true, message: 'Message sent!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving message' });
  }
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio_db';

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err.message));

app.listen(PORT, () => console.log(`Server live on http://localhost:${PORT}`));