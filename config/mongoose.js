import {MongoClient} from 'mongodb';

const url="mongodb://127.0.0.1:27017/Polling_System";
const connectWithDb = () => {
    MongoClient.connect(url)
              .then(client => {
                  console.log("Mongodb is connected");
              })
              .catch(err => {
                  console.log(err);
        })
};

export default connectWithDb;
