const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "todos" });
});


module.exports = router;