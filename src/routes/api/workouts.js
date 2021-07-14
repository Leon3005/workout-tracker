const { Router } = require("express");

const {
  getWorkouts,
  addWorkout,
  continueWorkout,
} = require("../../controllers/api/workouts");

const router = Router();

router.get("/", getWorkouts);
router.post("/", addWorkout);
router.put("/:id", continueWorkout);

module.exports = router;
