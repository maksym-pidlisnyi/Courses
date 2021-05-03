const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const db = require("./models");
const dbConfig = require("./config/db.config");
const Role = db.role;

const app = express();

let corsOptions = {
    origin: "http://localhost:3001"
};

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src')));
app.use(cors(corsOptions))


app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.get('/about', (req, res) => {
    res.sendFile('aboutUs.html', { root: __dirname + '/public/'})
})

app.get('/courses', (req, res) => {
    res.sendFile('courses.html', { root: __dirname + '/public/'})
})

app.get('/my-courses', (req, res) => {
    res.sendFile('courses.html', { root: __dirname + '/public/'})
})

app.get('/courses/:courseId', (req, res) => {
    console.log("Course id: " + req.params.courseId)
    res.sendFile('courseDetailed.html', { root: __dirname + '/public/'})
})

app.get('/login', (req, res) => {
    res.sendFile('login.html', { root: __dirname + '/public/'})
})

app.get('/register', (req, res) => {
    res.sendFile('register.html', { root: __dirname + '/public/'})
})

require('./routes/auth.routes')(app);
require('./routes/course.routes')(app);


db.mongoose
    .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        // initial();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

module.exports = app;
