const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  description: String,
  localisation: String,
  ville: { type: mongoose.Schema.Types.ObjectId, ref: 'Ville', required: true }
  
});

module.exports = mongoose.model('SiteTouristique', siteSchema);