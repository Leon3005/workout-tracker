const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  manga: [
    {
      type: Schema.Types.ObjectId,
      ref: "mangas",
    },
  ],
};

const WorkoutSchema = new Schema(workoutSchema);

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;
