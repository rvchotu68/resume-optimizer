const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) =>
    cb(null, path.join(__dirname, "../../uploads")),
  filename: (req, file, cb) => cb(null, file.originalname),
});

console.log(process.cwd() + "/uploads/");

module.exports = storage;
