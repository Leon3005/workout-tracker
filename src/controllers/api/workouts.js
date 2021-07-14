const { Workout } = require("../../models");

const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({});
  res.json(workouts);
};

const addWorkout = async (req, res) => {
  const { duration, name, reps, sets, type, weight } = req.body;

  const workout = {
    day: new Date(new Date().setDate(new Date().getDate())),
    exercises: [
      {
        duration,
        name,
        reps,
        sets,
        type,
        weight,
      },
    ],
  };

  const data = await Workout.create(workout);

  res.json(data);
};

module.exports = {
  getWorkouts,
  addWorkout,
};
