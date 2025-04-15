const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

router.get('/', siteController.getSites);
router.post('/', siteController.createSite);
router.delete('/:id', siteController.deleteSite);

module.exports = router;