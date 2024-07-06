const express = require('express');
const { check, validationResult } = require('express-validator');
const { createReferral } = require('../controllers/referralController');
const { authenticateToken } = require('../middlewares/auth');

const router = express.Router();

router.post('/referral', authenticateToken, [
  check('referrerName').notEmpty().withMessage('Referrer name is required'),
  check('referrerEmail').isEmail().withMessage('Valid referrer email is required'),
  check('refereeName').notEmpty().withMessage('Referee name is required'),
  check('refereeEmail').isEmail().withMessage('Valid referee email is required')
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, createReferral);

module.exports = router;
