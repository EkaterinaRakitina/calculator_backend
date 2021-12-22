const Spend = require('../../db/models/spend/index');

module.exports.getAllSpends = (req, res, next) => {
  Spend.find().then((result) => {
    res.send({ data: result });
  });
};

module.exports.createNewSpend = (req, res, next) => {
  if (req.body.hasOwnProperty('text') && req.body.hasOwnProperty('num') && req.body.hasOwnProperty('date')) {
    const spend = new Spend(req.body);
    spend
      .save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => console.log(err));
  } else {
    res.status(404).send('Not found');
  }
};

module.exports.deleteSpend = (req, res, next) => {
  if (req.query.id) {
    Spend.deleteOne({ _id: req.query.id })
      .then((result) => {
        Spend.find().then((result) => {
          res.send(result);
        });
      })
      .catch((err) => console.log(err));
  } else {
    res.status(404).send('Not found');
  }
};
