const express = require('express');
const router = express.Router();
const hotelController = require('./../controllers/hotelController');
const authController = require('../controllers/authController');
const reviewRouter = require("../routes/reviewRoutes");

router.use(authController.protect); //protect all routes

router.route('/')
.get(authController.restrictTo('admin'),hotelController.getAllHotels)
.post(hotelController.createHotel)

router.route('/:id')
.get(hotelController.getHotelById)
.patch(hotelController.updateHotel)
.delete(hotelController.deleteHotel)

router.use('/:hotelId/reviews',reviewRouter)

module.exports = router;