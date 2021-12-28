const router = require("express").Router();
const { signIn, signUp, refreshToken } = require("../controllers/auth");

router.get("/refresh_token", refreshToken);
router.post("/signin", signIn);
router.post("/signup", signUp);

module.exports = router;