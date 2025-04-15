// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

// Route to create a new user
router.post('/create', userController.createUSers);

// Route to get all users
router.get('/', userController.getusers);

// Route to get a user by ID
router.get('/:id/', userController.getUSerById);

// Route to update a user by ID
router.put('/:id', userController.updateUser);

// Route to delete a user by ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
