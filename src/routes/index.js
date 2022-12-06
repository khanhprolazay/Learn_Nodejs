const newsRouter = require('./news');
const homeRouter = require('./home');
const courseRouter = require('./courses');
const meRouter = require('./me');

function route(app) {
    app.use('/', homeRouter);
    app.use('/me', meRouter);
    app.use('/news', newsRouter);
    app.use('/courses', courseRouter);

    app.get('/search', (req, res) => {
        console.log(req.query);
        res.render('search');
    });
}

module.exports = route;
