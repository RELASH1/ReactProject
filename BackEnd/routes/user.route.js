const router = require("express").Router();
const userController = require("../controllers/user.controller");
router.post("/create",userController.createUser);
router.get("/",userController.getAllUsers);
router.post("/loginUser",userController.loginUser);
router.post("/SaveUserToken",userController.SaveUserToken);
module.exports = router;