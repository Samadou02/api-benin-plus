require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const villesRoutes = require('./routes/villes');
const sitesRoutes = require('./routes/sites');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); 

const app = express(); 

// Swagger UI route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware
app.use(cors());
app.use(express.json());
 
//Route principale
app.get('/', (req, res) => {
  res.json({
    message: "Bienvenue sur l'API Bénin Plus",
    availableRoutes: {
      villes: '/api/villes',
      sites: '/api/sites',
      docs: '/api-docs'  // Lien vers la documentation Swagger
    }
  });
});

// Routes
app.use('/api/villes', villesRoutes);
app.use('/api/sites', sitesRoutes);

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connecté à MongoDB');
    app.listen(3000, () => console.log('Serveur lancé sur http://localhost:3000'));
  })
  .catch(err => console.error(' Erreur MongoDB :', err));
