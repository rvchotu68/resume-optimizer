const fileServices = require("../services/file.services");

const userService = require("./../services/user.services");

exports.addUserprofile = async (req, res) => {
  const { name, email, uid } = req.user;
  try {
    await userService.createUser({ name, email, uid });
    res.status(201).json({
      code: "SUCCESS",
      message: "User created",
      data: [],
    });
  } catch (error) {
    let errMsg;
    if (error.name === "ValidationError") {
      errMsg = "Validation failed";
    } else if (error.code === 11000) {
      errMsg = "Duplicate key error";
    } else {
      errMsg = "Unexpected error";
    }

    res.status(400).json({
      code: "UNSUCCESSFUL",
      message: errMsg,
    });
  }
};

exports.deleteUserProfile = async (req, res) => {
  try {
    await userService.deleteUser(req.user.uid);
    res.status(204).json({
      code: "SUCCESS",
      message: "user account deleted",
    });
  } catch (err) {
    res.status(400).json({
      code: "UNSUCCESSFUL",
      message: "failed to delete the user account",
    });
  }
};

exports.optimizeResume = (req, res) => {
  console.log("body", req.body);
  console.log("file", req.file);

  //send the file to extract the text and store it

  //delete the stored file
  fileServices.deleteFileFromStorage(req);
  res.send("File received");
};

exports.chat = (req, res) => {
  res.send("chat route");
};
