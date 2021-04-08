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

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.use('/', indexRouter);
app.use('/users', usersRouter);

// TODO maybe change into more clear way as above
//  Now, just for testing
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
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
