const { Workout } = require("../../models");

const getWorkouts = async (req, res) => {
  const workouts = await Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ]);
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

const continueWorkout = async (req, res) => {
  const { duration, name, reps, sets, type, weight } = req.body;
  const { id } = req.params;

  const data = await Workout.findByIdAndUpdate(id, {
    $push: {
      exercises: req.body,
    },
  });

  res.json(data);
};

const getWorkoutsInRange = async (req, res) => {
  const workouts = await Workout.find({});
  res.json(workouts);
};

module.exports = {
  getWorkouts,
  addWorkout,
  continueWorkout,
  getWorkoutsInRange,
};
