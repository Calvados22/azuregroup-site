const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// 🔗 Connect to MongoDB
mongoose.connect('mongodb+srv://admin:admin123@cluster0.nyyb3mv.mongodb.net/azuregroup?retryWrites=true&w=majority&appName=Cluster0'
, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// 📦 Define a Schema
const contactSchema = new mongoose.Schema({
  nom: String,
  email: String,
  telephone: String,
  sujet: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model('Contact', contactSchema);

// 📨 POST route
app.post('/api/contact', async (req, res) => {
  const { nom, email, telephone, sujet, message } = req.body;

  if (!nom || !email || !message) {
    return res.status(400).json({ error: 'Nom, email et message sont requis.' });
  }

  try {
    const newContact = new Contact({ nom, email, telephone, sujet, message });
    await newContact.save();
    console.log('✅ Nouveau message enregistré:', newContact);
    res.status(200).json({ success: 'Message enregistré avec succès !' });
  } catch (err) {
    console.error('❌ Erreur d’enregistrement:', err);
    res.status(500).json({ error: 'Erreur lors de l’enregistrement du message.' });
  }
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
