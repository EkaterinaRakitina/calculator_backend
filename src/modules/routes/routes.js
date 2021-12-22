const express = require('express');
const router = express.Router();

const {
    getAllSpends,
    createNewSpend,
} = require('../controllers/spend.controller');

// Spends routes
router.get('/allSpends', getAllSpends);
router.post('/createSpend', createNewSpend);


module.exports = router;
