require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const villesRoutes = require('./routes/villes');
const sitesRoutes = require('./routes/sites');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/villes', villesRoutes);
app.use('/api/sites', sitesRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connecté à MongoDB');
    app.listen(3000, () => console.log('Serveur lancé sur http://localhost:3000'));
  })
  .catch(err => console.error('❌ Erreur MongoDB :', err));