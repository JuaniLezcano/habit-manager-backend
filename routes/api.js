const express = require('express');
const { createUser, getUser, updateUser, deleteUser } = require('../controllers/userController');
const { createHabit, getHabits, updateHabit, deleteHabit } = require('../controllers/habitController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

// Rutas para User
router.post('/users', createUser);
router.get('/users/:id', authenticateToken, getUser);
router.put('/users/:id', authenticateToken, updateUser);
router.delete('/users/:id', authenticateToken, deleteUser);

// Rutas para Habit 
router.post('/habits', authenticateToken, createHabit);
router.get('/habits', authenticateToken, getHabits);
router.put('/habits/:id', authenticateToken, updateHabit);
router.delete('/habits/:id', authenticateToken, deleteHabit);

module.exports = router;
