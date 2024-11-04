const User = require('./user');
const Habit = require('./habit');

// Un usuario puede tener muchos hábitos
User.hasMany(Habit, {
  foreignKey: 'userId',
  as: 'habits',
});

// Un hábito pertenece a un solo usuario
Habit.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

module.exports = { User, Habit };
