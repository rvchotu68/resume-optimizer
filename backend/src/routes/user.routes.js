const express = require("express");

const {
  addUserprofile,
  deleteUserProfile,
  optimizeResume,
  chat,
} = require("./../controllers/user.controllers");
const upload = require("./../middlewares/multer.middleware");
const { auth } = require("../middlewares/auth.middleware");

const router = express.Router();

// router.use(auth);

router.post("/", addUserprofile);
router.delete("/", deleteUserProfile);
router.post("/resume", upload.single("resume"), optimizeResume);
router.post("/chat", chat);

module.exports = router;
