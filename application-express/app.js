﻿/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
var app = express();

app.use(express.cookieParser());
app.use(express.session({secret: 'z4ywvtbq734tvqneh'}));

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view options', { layout: false });
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.favicon());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use('/static', express.static(__dirname + '/public'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// un cas special pour le js editeurpresentation.js
app.get('/', routes.index);
app.get('/presentation', routes.presentation);
app.get('/presentation/:id', routes.ecran);
app.get('/editer-presentation', routes.editPresentation);
app.get('/partager-presentation', routes.partagerPresentation);
app.get('/admin', routes.admin);
app.get('/contactez-nous', routes.contactez);
app.post('/login', routes.login);
app.get('/logout', routes.logout);
app.get('/profil', routes.profil);
app.post('/ajax/presentation', routes.servicesPresentation);
app.post('/recherche', routes.recherche);
app.get('/repertoire', routes.concatRepertoire);
app.get('/repertoire/goto', routes.gotoRepertoire);
app.get('/repertoire/root', routes.root);
app.get('/repertoire/precedent', routes.repertoirePrecedent);
app.get('/repertoire/courant', routes.getContenuRepertoireCourant);
app.get('/creer-repertoire', routes.creerRepertoire);
app.get('/creer-fichier', routes.creerFichier);
app.get('/supprimer-repertoire', routes.supprimerRepertoire);
app.get('/supprimer-fichier', routes.supprimerFichier);
app.get('/renommer-fichier', routes.renommerFichier);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.use(function(req,res){
  res.render('404', { pretty: true});
});
