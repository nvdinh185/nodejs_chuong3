const express = require('express');
const route = require('./routes');
const app = express();

// Router init
route(app);

// start server
const port = 3000;
app.listen(port, () => console.log(`Server is starting on port ${port}...`));