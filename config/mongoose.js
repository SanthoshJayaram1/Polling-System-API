import mongoose from "mongoose";

mongoose.set('strictQuery', true);
const connectWithDb = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/Polling_System", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log(`DB connected successfully`))
    .catch((error) => {
      console.log(`DB connection failed`);
      console.log(error);
      process.exit(1);
    });
};

export default connectWithDb;
