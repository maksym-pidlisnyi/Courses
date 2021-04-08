const db = require("../models");
const Course = db.course;

exports.createCourse = (req, res) => {
    const course = new Course({
        title: req.body.title,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        level: req.body.level,
        price: req.body.price,
        requirements: req.body.requirements,
        courseSyllabus: req.body.courseSyllabus
    });

    course.save((err, course) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        course.save(err => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            res.send({ message: "User was registered successfully!" });
        });
    });
};

exports.getAllCourses = (req, res) => {
    Course.find({}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
};

exports.deleteCourse = (req, res) => {
    Course.deleteOne({ _id: req.body.id }, function(err) {
        if (err)
            console.log(err);
    });
};