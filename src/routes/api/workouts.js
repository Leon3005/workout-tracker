const { Router } = require("express");

const { getWorkouts, addWorkout } = require("../../controllers/api/workouts");

const router = Router();

router.get("/", getWorkouts);
router.post("/", addWorkout);

module.exports = router;
