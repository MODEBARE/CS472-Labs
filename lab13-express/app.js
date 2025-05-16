const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const calculatorRouter = require('./routes/calculator');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', calculatorRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});