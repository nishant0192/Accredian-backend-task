const express = require('express');
const programController = require('../controllers/programController');
const { authenticateToken } = require('../middlewares/auth');
const { checkAdmin } = require('../middlewares/admin');

const router = express.Router();

router.post('/', authenticateToken, checkAdmin, programController.createProgram);
router.get('/', programController.getPrograms);
router.get('/:id', programController.getProgram);
router.put('/:id', authenticateToken, checkAdmin, programController.updateProgram);
router.delete('/:id', authenticateToken, checkAdmin, programController.deleteProgram);

module.exports = router;
