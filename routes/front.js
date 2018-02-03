const express = require('express');
const router = express.Router();
//

/*
Configuration de Mongoose
*/
const mongoose = require('mongoose');
const mongoServeur = 'mongodb://localhost:27017/todomvc';
//

/*
Définition des routes
*/
// Afficher la liste des posts dans la page INDEX
router.get( '/', (req, res) => {
 
  // Connexion à la BDD MongoDB
  mongoose.connect( mongoServeur, ( err, db ) => {
      // Tester la connexion à la BDD
      if( err ) { res.render('index', {error: err}) }
      else {

          // Connexion ouverte : récupérer la collection de données
          db.collection('tasks').find().toArray( (err, collection) => {

              // Tester la connexion à la collection
              if( err ) { res.render('index', {error: err}) }
              else{

                  // Collection récupérée : Renvoyer le fichier index dans la réponse avec la collection
                  res.render('index', {data: collection});
              };
          });
      };

      // Fermer la connexion
      db.close();
  });
});

//

/*
Exporter le module de route
*/
module.exports = router;
//