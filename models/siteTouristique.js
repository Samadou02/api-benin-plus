const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  description: String,
  localisation: String,
  ville: { type: mongoose.Schema.Types.ObjectId, ref: 'Ville', required: true },
  image: String // URL ou base64 selon ton choix
});

module.exports = mongoose.model('SiteTouristique', siteSchema);