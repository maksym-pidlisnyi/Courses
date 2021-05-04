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
        price: Array, // Standard Month and Year, Premium Month and Year
        requirements: String,
        courseSyllabus: String,
        users: Array
    })
);

module.exports = Course;