const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const rootDir = require('./util/path')

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');


const app = express();

app.set('view engine', 'pug'); // usando pug como template dinamico
app.set('views', 'views'); // onde achar os templates

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public'))) //acha a pasta public dentro do projeto

app.use('/admin', adminData.routes); // uma forma de importar as rotas
app.use(shopRoutes); // outra forma de se importar as rotas

app.use((req, res, next) => {
    res.status(404).render("404", {pageTitle: 'Page Not Found'});
})

app.listen(3000);
