const Spend = require('../../db/models/spend/index');

module.exports.getAllSpends = (req, res, next) => {
    Spend.find().then((result) => {
        res.send({data: result});
    });
};

module.exports.createNewSpend = (req, res, next) => {
    
}