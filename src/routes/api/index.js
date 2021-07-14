const { Router } = require("express");

const workouts = require("./workouts");

const router = Router();

router.use("/workouts", workouts);

module.exports = router;
