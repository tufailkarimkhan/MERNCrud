const mongoose = require("mongoose");
const mongoDBUri = "mongodb://localhost:27017/crudReact";
//   "mongodb+srv://tufailkarim07:tufailkarim07@cluster0.z5r90.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

/*database Connection*/
const connectDB = () => {
  mongoose
    .connect(mongoDBUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((info) => {
      console.log(`mongoDB Connected`);
    })
    .catch((err) => {
      console.log(`Error from Database: ${err}`);
    });
};

module.exports = connectDB;
