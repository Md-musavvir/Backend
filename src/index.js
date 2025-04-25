import { configDotenv } from "dotenv";
import connectDb from "./db/Db.js";
import app from "./app.js";

connectDb()
  .then(() => {
    app.listen(process.env.PORT, (req, res) => {
      console.log("listening");
    });
  })
  .catch((err) => {
    console.log(err);
  });
