const controller = require("../controllers/course.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/coursesB", controller.getAllCourses);

    app.get("/coursesB/:id", controller.getCourse);

    app.post("/coursesB", controller.upsertCourse);

    app.delete("/coursesB", controller.deleteCourse);

    app.get("/userCourses/:userId", controller.getAllCoursesByUser);

    app.post("/enroll", controller.enroll);

    app.delete("/chekOut", controller.checkOut);

};