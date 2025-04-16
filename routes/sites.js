const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

router.get('/', siteController.getSites);
router.post('/', siteController.createSite);
router.delete('/:id', siteController.deleteSite);

module.exports = router;


/**
 * @swagger
 * /api/sites:
 *   get:
 *     summary: Récupère tous les sites touristiques
 *     responses:
 *       200:
 *         description: Liste des sites touristiques
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nom:
 *                     type: string
 *                   description:
 *                     type: string
 *                   localisation:
 *                     type: string
 *                   ville:
 *                     type: object
 *                     properties:
 *                       nom:
 *                         type: string
 *                       image:
 *                         type: string
 *                       description:
 *                         type: string
 */
router.get('/', siteController.getSites);

/**
 * @swagger
 * /api/sites:
 *   post:
 *     summary: Crée un nouveau site touristique
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nom
 *               - localisation
 *               - ville
 *             properties:
 *               nom:
 *                 type: string
 *               description:
 *                 type: string
 *               localisation:
 *                 type: string
 *               ville:
 *                 type: string
 *     responses:
 *       201:
 *         description: Site touristique créé
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nom:
 *                   type: string
 *                 description:
 *                   type: string
 *                 localisation:
 *                   type: string
 *                 ville:
 *                   type: string
 */
router.post('/', siteController.createSite);

/**
 * @swagger
 * /api/sites/{id}:
 *   delete:
 *     summary: Supprime un site touristique
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du site touristique à supprimer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Site touristique supprimé
 *       404:
 *         description: Site non trouvé
 */
router.delete('/:id', siteController.deleteSite);
