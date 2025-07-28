const fileServices = require("../services/file.services");
const AIService = require("./../services/AI.services");
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

exports.optimizeResume = async (req, res) => {
  console.log("body", req.body);
  console.log("file", req.file);

  const { jobDesc } = req.body;

  const AIservice = new AIService();

  if (!req.body || !req.file)
    return res.status(400).json({ code: "ERROR", message: "Data missing" });

  try {
    //set the doc type
    AIservice.setDoc(req.file);
    await AIservice.extractTextFromFile(req.file);
    // //delete the stored file
    await AIservice.createPrompt(jobDesc);
    // await AIservice.generateResume();
    const response = await AIservice.generateResume();

    //store the user resume in the mongo db for future use.

    //delete the uploaded resume
    fileServices.deleteFileFromStorage(req);

    //send the response back to the frontend
    res.status(200).json({
      code: "SUCCESS",
      data: response,
    });
  } catch (err) {
    res.status(400).json({
      code: "ERROR",
      message: err.message,
    });
  }
};

exports.chat = (req, res) => {
  res.send("chat route");
};
