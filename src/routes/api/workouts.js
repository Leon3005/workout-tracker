const { Router } = require("express");

const { getWorkouts } = require("../../controllers/api/workouts");

const router = Router();

router.get("/", getWorkouts);

module.exports = router;
