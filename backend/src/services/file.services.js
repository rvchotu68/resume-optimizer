const fs = require("fs");

class FileService {
  constructor() {}

  async extractContent(req) {}

  deleteFileFromStorage(req) {
    console.log(req.file.path);

    try {
      fs.unlinkSync(req.file.path);
      console.log("deleted file");
    } catch (er) {
      throw er;
    }
  }
}

module.exports = new FileService();
