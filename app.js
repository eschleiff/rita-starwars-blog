const express = require('express');
const routes = require('./routes');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.engine('hbs', exphbs({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/public')));

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

app.use(routes);

module.exports = app;
