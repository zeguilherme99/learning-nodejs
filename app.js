const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressHbs = require('express-handlebars');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');


const app = express();

app.engine('hbs',
    expressHbs({
        layoutsDir: 'views/layouts',
        defaultLayout: 'main-layout',
        extname: 'hbs'
    })
); // onde encontrar o layout 
app.set('view engine', 'hbs'); // usando handlebars como template dinamico
app.set('views', 'views'); // onde achar os templates

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public'))) //acha a pasta public dentro do projeto

app.use('/admin', adminData.routes); // uma forma de importar as rotas
app.use(shopRoutes); // outra forma de se importar as rotas

app.use((req, res, next) => {
    res.status(404).render("404", {pageTitle: 'Page Not Found'});
})

app.listen(3000);
