const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "singout" });
});

module.exports = router;