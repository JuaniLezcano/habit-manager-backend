const Habit = require('../models/habit');
const User = require('../models/user');

// Crear un nuevo hábito
exports.createHabit = async (req, res) => {
  try {
    const { userId, titulo, descripcion, importancia } = req.body;
    
    // Verifica que el usuario exista
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Crea el hábito
    const habit = await Habit.create({ userId, titulo, descripcion, importancia });
    res.status(201).json(habit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los hábitos de un usuario específico
exports.getHabits = async (req, res) => {
  try {
    const { userId } = req.query;

    // Busca los hábitos relacionados con el usuario
    const habits = await Habit.findAll({ where: { userId } });
    res.json(habits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un hábito
exports.updateHabit = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descripcion, importancia } = req.body;

    // Busca el hábito a actualizar
    const [updated] = await Habit.update({ titulo, descripcion, importancia }, { where: { id } });
    
    if (updated) {
      const updatedHabit = await Habit.findByPk(id);
      res.json(updatedHabit);
    } else {
      res.status(404).json({ message: 'Hábito no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un hábito
exports.deleteHabit = async (req, res) => {
  try {
    const { id } = req.params;

    // Elimina el hábito
    const deleted = await Habit.destroy({ where: { id } });
    
    if (deleted) {
      res.status(204).json({ message: 'Hábito eliminado' });
    } else {
      res.status(404).json({ message: 'Hábito no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
