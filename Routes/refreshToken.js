const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("refreshToken");
});

module.exports = router;