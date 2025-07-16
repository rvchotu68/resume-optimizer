const fileServices = require("../services/file.services");

exports.addUserprofile = (req, res) => {
  res.send("post route");
};

exports.deleteUserProfile = (req, res) => {
  res.send("delete route");
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
