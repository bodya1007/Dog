const express = require('express');
const router = express.Router();
const DogController = require('../controller/dog.controller');
const validateDogData = require('../util/validation');

router
    .get('/ping', DogController.ping)
    .get('/dogs', DogController.getDogs)
    .post('/dog', validateDogData, DogController.createDog)

module.exports = router;
