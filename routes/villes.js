const express = require('express');
const router = express.Router();
const villeController = require('../controllers/villeController');

router.get('/', villeController.getVilles);
router.post('/', villeController.createVille);
router.delete('/:id', villeController.deleteVille);

module.exports = router;

