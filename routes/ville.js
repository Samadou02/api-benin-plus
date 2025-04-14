const express = require('express');
const router = express.Router();
const Ville = require('../models/Ville');

// GET toutes les villes
router.get('/', async (req, res) => {
  try {
    const villes = await Ville.find();
    res.json(villes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET une ville par son id
router.get('/:id', async (req, res) => {
  try {
    const ville = await Ville.findById(req.params.id);
    if (!ville) return res.status(404).json({ message: 'Ville non trouvée' });
    res.json(ville);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST ajouter une nouvelle ville
router.post('/', async (req, res) => {
  const ville = new Ville(req.body);
  try {
    const villeSauvegarde = await ville.save();
    res.status(201).json(villeSauvegarde);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT mettre à jour une ville
router.put('/:id', async (req, res) => {
  try {
    const ville = await Ville.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ville) return res.status(404).json({ message: 'Ville non trouvée' });
    res.json(ville);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE supprimer une ville
router.delete('/:id', async (req, res) => {
  try {
    const ville = await Ville.findByIdAndDelete(req.params.id);
    if (!ville) return res.status(404).json({ message: 'Ville non trouvée' });
    res.json({ message: 'Ville supprimée' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
