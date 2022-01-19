const route = require("express").Router();
const {
  insert,
  read,
  update,
  deleteInfo,
} = require("../controller/controller");

/*here  route of insert data */
route.post("/person", insert);
/*here  route of read data*/
route.get("/read", read);
/*here  route of update data*/
route.post("/update", update);
/*here route of delete data*/
route.post("/delete", deleteInfo);
module.exports = route;
