const Site = require('../models/siteTouristique');

exports.getSites = async (req, res) => {
  try {
    const sites = await Site.find().populate('ville');
    res.json(sites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createSite = async (req, res) => {
  try {
    const site = new Site(req.body);
    const saved = await site.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteSite = async (req, res) => {
  try {
    await Site.findByIdAndDelete(req.params.id);
    res.json({ message: 'Site touristique supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
