const express = require('express');
const router = express.Router();

const {
  getAllSpends,
  createNewSpend,
  deleteSpend,
  changeInfoSpend
} = require('../controllers/spend.controller');

// Spends routes
router.get('/allSpends', getAllSpends);
router.post('/createSpend', createNewSpend);
router.delete('/deleteSpend', deleteSpend);
router.patch('/changeSpend', changeInfoSpend);

module.exports = router;
