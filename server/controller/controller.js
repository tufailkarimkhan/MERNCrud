const information = require("../model/information");
const { route } = require("../router/router");

/*here insert function*/

exports.insert = async (req, res) => {
  try {
    const { name, age, email, address } = req.body;
    let person = new information({
      name: name,
      age: age,
      email: email,
      address: address,
    });
    person.save((data) => {
      res.json({ message: `Informaton Added ${data}` });
    });
  } catch (err) {
    console.log(err);
  }
};

/*here read function */
exports.read = async (req, res) => {
  try {
    information.find(
      {},
      { name: 1, age: 1, email: 1, address: 1, _id: 0 },
      (err, result) => {
        if (err) {
          res.send(err);
        }
        res.send(result);
      }
    );
  } catch (err) {
    console.log(`Error from Find route ${err}`);
  }
};

/*here update function*/
exports.update = async (req, res) => {
  try {
    const { name, age, email, address } = req.body;
    let info = await information.findOneAndUpdate(
      { email: email },
      { name: name, age: age, address: address }
    );
    res.json({ message: `data Updated ${info}` });
  } catch (err) {
    console.log(`Error from update route ${err}`);
  }
};
/*delete function*/
exports.deleteInfo = async (req, res) => {
  try {
    const { email } = req.body;
    let info = await information.findOneAndDelete({ email: email });
    res.json({ message: `${info.name}'s information deleted` });
  } catch (err) {
    console.log(`Error from delete route ${err}`);
  }
};
