const express = require('express');
const app = express();

const route = require('./routes');

// Router init
route(app);

// start server
const port = 3000;
app.listen(port, () => console.log(`Server is starting on port ${port}...`));