const express = require('express');
const router = express.Router();
const villeController = require('../controllers/villeController');

router.get('/', villeController.getVilles);
router.post('/', villeController.createVille);
router.delete('/:id', villeController.deleteVille);

module.exports = router;

/**
 * @swagger
 * /api/villes:
 *   get:
 *     summary: Récupère toutes les villes
 *     responses:
 *       200:
 *         description: Liste des villes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nom:
 *                     type: string
 *                   image:
 *                     type: string
 *                   description:
 *                     type: string
 *                   histoire:
 *                     type: string
 *                   culture:
 *                     type: string
 *                   activites_economiques:
 *                     type: string
 *                   situation_geographique:
 *                     type: string
 *                   specialite_culinaire:
 *                     type: string
 *                   langues:
 *                     type: array
 *                     items:
 *                       type: string
 *                   produits_locaux:
 *                     type: array
 *                     items:
 *                       type: string
 */
router.get('/', villeController.getVilles);

/**
 * @swagger
 * /api/villes:
 *   post:
 *     summary: Crée une nouvelle ville
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nom
 *               - image
 *               - description
 *             properties:
 *               nom:
 *                 type: string
 *               image:
 *                 type: string
 *               description:
 *                 type: string
 *               histoire:
 *                 type: string
 *               culture:
 *                 type: string
 *               activites_economiques:
 *                 type: string
 *               situation_geographique:
 *                 type: string
 *               specialite_culinaire:
 *                 type: string
 *               langues:
 *                 type: array
 *                 items:
 *                   type: string
 *               produits_locaux:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Ville créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nom:
 *                   type: string
 *                 image:
 *                   type: string
 *                 description:
 *                   type: string
 *                 histoire:
 *                   type: string
 *                 culture:
 *                   type: string
 *                 activites_economiques:
 *                   type: string
 *                 situation_geographique:
 *                   type: string
 *                 specialite_culinaire:
 *                   type: string
 *                 langues:
 *                   type: array
 *                   items:
 *                     type: string
 *                 produits_locaux:
 *                   type: array
 *                   items:
 *                     type: string
 */
router.post('/', villeController.createVille);

/**
 * @swagger
 * /api/villes/{id}:
 *   delete:
 *     summary: Supprime une ville
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la ville à supprimer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ville supprimée avec succès
 *       404:
 *         description: Ville non trouvée
 */
router.delete('/:id', villeController.deleteVille);
