const { jesonResposne } = require("../lib/jsonResponse");

const router = require("express").Router();

router.post("/", (req, res) => {
  const [username, name, password] = req.body;

  if (!!!username && !!!name && !!!password) {
    return res.status(400).json(
      jesonResposne(400, {
        error: "Fields are required",
      })
    );
    res.json({ message: "signup" });
  }

  res.status(200).json(jesonResposne(200, { message: "user create susesfully" }));
});

module.exports = router;
