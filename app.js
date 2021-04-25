const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const db = require("./models");
const dbConfig = require("./config/db.config");
const Role = db.role;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

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


//TODO move to index router
// FOR TESTING PURPOSES
app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.get('/courses', (req, res) => {
    res.sendFile('courses.html', { root: __dirname + '/public/'})
})

app.get('/login', (req, res) => {
    res.sendFile('login.html', { root: __dirname + '/public/'})
})

app.get('/register', (req, res) => {
    res.sendFile('register.html', { root: __dirname + '/public/'})
})

app.get('/coursesapi', (req, res) => {
    res.status(201).json([
        {
            id: "1",
            title: 'First Course',
            description: "first Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price: "120",
            startDate: '2021-04-23'
        },
        {
            id: "2",
            title: 'Second Course',
            description: "Second Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price: "140",
            startDate: '2021-05-25'
        },
        {
            id: "3",
            title: 'Third Course',
            description: "Third Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price: "150",
            startDate: '2021-06-01'
        },
        {
            id: "4",
            title: 'Fourth Course',
            description: "Third Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price: "170",
            startDate: '2021-06-07'
        }
    ])
})


app.use('/', indexRouter);
app.use('/users', usersRouter);


// TODO maybe change into more clear way as above
//  Now, just for testing
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/course.routes')(app);



// db.mongoose
//     .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => {
//         console.log("Successfully connect to MongoDB.");
//         // initial();
//     })
//     .catch(err => {
//         console.error("Connection error", err);
//         process.exit();
//     });

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}

module.exports = app;
