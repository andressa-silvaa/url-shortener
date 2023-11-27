const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController');

router.get('/:code/stats', linkController.getStats);
router.get('/:code', linkController.redirect);
router.get('/', linkController.getIndex);
router.post('/new', linkController.createNewLink);

module.exports = router;
