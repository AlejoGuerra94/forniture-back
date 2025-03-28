const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "Refresh Token endpoint" });
});

module.exports = router;