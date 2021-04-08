const controller = require("../controllers/course.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/courses", controller.getAllCourses())

    app.post("/courses", controller.createCourse())

    app.delete("/courses", controller.deleteCourse())
};