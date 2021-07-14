const { Router } = require("express");
const path = require("path");

const router = Router();

// router.get("/exercise/:id", (req, res) => {
//   res.sendFile(path.join(__dirname, "../../../src/public/exercise.html"));
// });

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../src/public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../src/public/stats.html"));
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../src/public/index.html"));
});

module.exports = router;
