const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = {
  day: Date,
  exercises: [
    {
      name: {
        type: String,
      },
      type: {
        type: String,
      },
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],
};

const WorkoutSchema = new Schema(workoutSchema);

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;
