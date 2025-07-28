const fs = require("fs");

class FileService {
  constructor() {}

  deleteFileFromStorage(req) {
    console.log(req.file.path);

    try {
      fs.unlinkSync(req.file.path);
      console.log("deleted file");
    } catch (er) {
      throw er;
    }
  }

  async createFileFromText() {
    try {
    } catch (err) {}
  }
}

module.exports = new FileService();
