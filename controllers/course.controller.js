const db = require("../models");
const Course = db.course;

exports.upsertCourse = (req, res) => {
    const course = {
        title: req.body.title,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        level: req.body.level,
        price: req.body.price,
        requirements: req.body.requirements,
        courseSyllabus: req.body.courseSyllabus,
        users: req.body.users
    };

    Course.findOneAndUpdate({'title': req.body.title}, course, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Course was saved successfully!');
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

    // res.sendFile('courses.html', { root: __dirname + '/public/'})
};

exports.deleteCourse = (req, res) => {
    Course.deleteOne({ _id: req.body.id }, function(err) {
        if (err)
            console.log(err);

        res.send({ message: "Course was deleted successfully!" });
    });
};

exports.getCourse = (req, res) => {
    let id = req.params.id
    Course.findOne({ _id: id}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
};

exports.getAllCoursesByUser = (req, res) => {
    let userId = req.params.userId;
    Course.find({ users: {  $elemMatch: {userId: userId } } }, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    })
}

exports.enroll = (req, res) => {
    let courseId = req.body.courseId;
    let userObj = req.body.userObj;



    Course.find({ _id: courseId, users: { $elemMatch: {userId: userObj.userId } } }, function (err, result) {
        // if (err) return res.send(500, {error: err});
        console.log(result);
        console.log(result.length)
        if (!!result) {
            if (Array.isArray(result) && result.length === 0) {
                Course.findOneAndUpdate({_id: courseId}, {$push: {users: [userObj]}},
                    {}, function (err, doc) {
                        if (err) return res.send(500, {error: err});
                        return res.send('Enrolled successfully!');
                    })
            } else {
                return res.send(200, {
                    message: "This user is already enrolled in this course"
                })
            }
        }
    } )


}

exports.checkOut = (req, res) => {
    let courseId = req.body.courseId;
    let userId = req.body.userId;

    Course.findOneAndUpdate( { _id: courseId }, { $pull: { users: {  userId: userId  } } },
        {},function (err, doc) {
            if (err) return res.send(500, {error: err});
            return res.send('Checked out successfully!');
        })
}
