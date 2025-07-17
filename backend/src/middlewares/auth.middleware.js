const admin = require("./../config/firebase.config");

exports.auth = async (req, res, next) => {
  const authToken = req.headers.authorization.split(" ")[1];
  //   console.log(authToken);
  if (!req.headers || !authToken)
    return res
      .status(401)
      .json({ code: "UnAuthorized", message: "token is missing" });

  try {
    const decoded = await admin.auth().verifyIdToken(authToken);
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    return res.status(403).json({ error: "Unauthorized", message: err });
  }
};
