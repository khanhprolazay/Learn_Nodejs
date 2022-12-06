const Course = require('../models/Course');
const { multipleMongooseToObj } = require('../../util/mongoose');

class HomeController {
    // [GET] /news
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObj(courses),
                });
            })
            .catch((err) => next(err));
    }

    show(req, res) {
        res.send('HOME DETAILS');
    }
}

module.exports = new HomeController();
