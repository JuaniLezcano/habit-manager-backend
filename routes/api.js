const express = require('express');
const { createUser, getUser, updateUser, deleteUser } = require('../controllers/userController');
const { createHabit, getHabits, updateHabit, deleteHabit } = require('../controllers/habitController');

const router = express.Router();

// Rutas para User
router.post('/users', createUser);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

// Rutas para Habit
router.post('/habits', createHabit);
router.get('/habits', getHabits);
router.put('/habits/:id', updateHabit);
router.delete('/habits/:id', deleteHabit);

module.exports = router;
