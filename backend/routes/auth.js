const router = require("express").Router();
const { signIn, signOut } = require("../controllers/auth");

router.post("/signin", signIn);
router.post("/signout", signOut);

module.exports = router;