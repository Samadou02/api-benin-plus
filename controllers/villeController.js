const Ville = require('../models/ville');

exports.getVilles = async (req, res) => {
  try {
    const villes = await Ville.find();
    res.json(villes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createVille = async (req, res) => {
  try {
    const ville = new Ville(req.body);
    const saved = await ville.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteVille = async (req, res) => {
  try {
    await Ville.findByIdAndDelete(req.params.id);
    res.json({ message: 'Ville supprimée' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};