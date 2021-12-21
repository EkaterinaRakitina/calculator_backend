const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const uri =
  'mongodb+srv://EkaterinaRakitina:restart987@cluster0.v7hrh.mongodb.net/calculator?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });


app.listen(5000, () => {
    console.log('App listening on port 5000');
})