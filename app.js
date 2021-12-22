const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const apiRroutes = require('./src/modules/routes/routes')

app.use(cors());
app.use(express.json());
app.use('/', apiRroutes);

const uri =
  'mongodb+srv://EkaterinaRakitina:restart987@cluster0.v7hrh.mongodb.net/calculator?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(5000, () => {
    console.log('Example app listening on port 5000');
})