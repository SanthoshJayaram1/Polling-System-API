import express from "express";
import connectWithDb from "./config/mongoose.js";
import router from "./routes/index.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;
const app = express();


// regular middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use express router
app.use('/',router);

app.listen(PORT||5000, (err) => {
  if (err) {
    console.log(`Error in running the server : ${err}`);
  }
  console.log(`Server is up and running at 5000`);
   // connect with database
    connectWithDb();
});
