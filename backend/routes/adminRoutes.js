const express = require("express");
const router = express.Router();
const {verifyToken}=require("../middelware/jwtToken")
const { Login,AddProducts,DeleteProducts ,ViewAllProducts} = require("../controls/adminControls");

router.route("/login").post(Login);
router.route('/addProducts').post(verifyToken,AddProducts)
router.route('/deleteProduct/:id').delete(verifyToken,DeleteProducts)
router.route('/viewAllProduct').get(ViewAllProducts)

module.exports = router;
