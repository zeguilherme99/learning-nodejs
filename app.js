const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const errorController = require('./controllers/error');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'ejs'); // usando ejs como template dinamico
app.set('views', 'views'); // onde achar os templates

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public'))) //acha a pasta public dentro do projeto

app.use('/admin', adminRoutes.routes); // uma forma de importar as rotas
app.use(shopRoutes); // outra forma de se importar as rotas

app.use(errorController.get404);

app.listen(3000);
