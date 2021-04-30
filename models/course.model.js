const mongoose = require("mongoose");

// TODO not sure about all fields
const Course = mongoose.model(
    "Course",
    new mongoose.Schema({
        title: String,
        description: String,
        startDate: String,
        endDate: String,
        level: String,  //difficulty
        price: String,
        requirements: String,
        courseSyllabus: String,
        users: Array
    })
);

module.exports = Course;