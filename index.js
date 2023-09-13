import express from "express";
import connectWithDb from "./config/mongoose.js";
import router from "./routes/index.js";

const app = express();

// connect with database
connectWithDb();

// regular middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use express router
app.use('/',router);

app.listen(5000, (err) => {
  if (err) {
    console.log(`Error in running the server : ${err}`);
  }
  console.log(`Server is up and running at 5000`);
});
