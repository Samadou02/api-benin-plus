const mongoose = require('mongoose');

const villeSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  histoire: { type: String },
  culture: { type: String },
  activites_economiques: { type: String },
  situation_geographique: { type: String },
  specialite_culinaire: { type: String },
  langues: { type: [String] },
  produits_locaux: { type: [String] },
});

module.exports = mongoose.model('Ville', villeSchema);
