const { Workout } = require("../../models");

const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({});
  res.json(workouts);
};

module.exports = {
  getWorkouts,
};
