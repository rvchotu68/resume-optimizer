const userModel = require("./../models/user.model");

class UserService {
  constructor() {}

  async createUser({ uid, name, email }) {
    try {
      const user = new userModel({
        userID: uid,
        email,
        name,
      });

      await user.save();
    } catch (err) {
      throw err;
    }
  }

  async updateUser() {}

  async deleteUser(id) {
    try {
      await userModel.deleteOne({
        userID: id,
      });
      console.log("user deleted");
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new UserService();
