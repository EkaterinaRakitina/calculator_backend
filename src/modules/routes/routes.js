const express = require('express');
const router = express.Router();

const {
  getAllSpends,
  createNewSpend,
  deleteSpend,
} = require('../controllers/spend.controller');

// Spends routes
router.get('/allSpends', getAllSpends);
router.post('/createSpend', createNewSpend);
router.delete('/deleteSpend', deleteSpend);

module.exports = router;
