require("dotenv").config();

const app = require("./app.js");

console.log(process.env.PORT);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started listening on port: ${PORT}`);
});
