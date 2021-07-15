const { Router } = require("express");

const {
  getWorkouts,
  addWorkout,
  continueWorkout,
  getWorkoutsInRange,
} = require("../../controllers/api/workouts");

const router = Router();

router.put("/:id", continueWorkout);
router.post("/", addWorkout);
router.get("/range", getWorkoutsInRange);
router.get("/", getWorkouts);

module.exports = router;
