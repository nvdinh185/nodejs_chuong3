const express = require('express');
const mongoose = require('mongoose');

const app = express();

const connect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/news', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("CONNECTED MONGODB SUCCESS");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("MONGODB DISCONNECTED");
});
mongoose.connection.on("connected", () => {
    console.log("MONGODB CONNECTED");
});

app.use(express.static(__dirname + '/client'));

const route = require('./routes');

// Router init
route(app);

// start server
const port = 3000;
app.listen(port, () => {
    connect();
    console.log(`Server is starting on port ${port}...`);
});