require("dotenv").config();

const app = require("./app.js");
const mongoose = require("mongoose");

console.log(process.env.PORT);

const PORT = process.env.PORT || 3000;

const dbURL = process.env.MONGODB_URL.replace(
  /\<db_password\>/,
  process.env.MONGODB_PASS
);

async function main() {
  await mongoose.connect(dbURL);
}

main()
  .then(() => {
    console.log("MongoDB server started");
  })
  .catch((err) => {
    console.log("MongoDB connection failed:" + err);
  });

app.listen(PORT, () => {
  console.log(`Server started listening on port: ${PORT}`);
});
