const express = require('express');

const itemController = require('../controllers/items')

const storage = require('../helpers/storage')
 
const router = express.Router();

router.get('/', itemController.getItems);

router.post('/', storage, itemController.postItem)

module.exports = router;