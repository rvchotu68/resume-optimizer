const admin = require("firebase-admin");

const serviceAccount = require("./../../jobverse-187ff-firebase-adminsdk-fbsvc-e43cfe296e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: serviceAccount.project_id,
});

module.exports = admin;
