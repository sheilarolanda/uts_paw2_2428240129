const express = require('express');
const router = express.Router();
const HomestayController = require('../controllers/HomestayController');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', HomestayController.getAll);
router.get('/:id', HomestayController.getById);
router.post('/', cekApiKey, HomestayController.create);

module.exports = router;