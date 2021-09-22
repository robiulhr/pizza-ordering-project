require('dotenv').config()
const express = require('express')
const app = express()
const ejs = require("ejs")
const path = require("path")
const expressLayout = require("express-ejs-layouts")
const session = require('express-session')
const flash = require('express-flash')
const MongoDBStore = require('connect-mongodb-session')(session);
// database connection 
const mongoose = require("mongoose");
mongoose.connect(process.env.Database_URL,
    {
        useNewUrlParser: true,
        // useFindAndModify: false,
        useUnifiedTopology: true
    }
);
const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error: "));
connection.once("open", function () {
    console.log("Connected successfully");
});
// // creating store to store seasion data
// var mongoDbStore = new MongoDBStore({
//     uri: process.env.Database_URL,
//     collection: 'mySessions'
// });
// // Catch errors
// mongoDbStore.on('error', function (error) {
//     console.log(error);
// });
// session
// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//     secret: process.env.seasion_secret_key,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         secure: false,
//         // maxAge: 1000 * 60 * 60 * 24 // 24 hours
//         maxAge: 1000 * 15//15 second
//     },
//     store: mongoDbStore,
// }))
// app.use(flash());




// requiring routes
require('./routes/web')(app)

const PORT = process.env.PORT || 3000

// Assets 
app.use(express.static("public"))








// set Templete engine
app.use(expressLayout)
app.set("views", path.join(__dirname, "/resources/views"));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})