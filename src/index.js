const express = require('express');
const morgan = require('morgan');
const route = require('./routes');
const methodOverride = require('method-override');
const db = require('./resources/config/db');
const hanleBars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    })
); // Xử lí data từ query -> body
app.use(express.json()); // Xử lí data trong form data -> dạng json

app.use(methodOverride('_method'));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    hanleBars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
route(app);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
