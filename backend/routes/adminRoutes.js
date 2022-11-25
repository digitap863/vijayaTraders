const express = require("express");
const router = express.Router();
const {verifyToken}=require("../middelware/jwtToken")
const { Login,AddProducts,DeleteProducts ,ViewAllProducts,AddGalley,viewAllGallery,DeleteGallery} = require("../controls/adminControls");

router.route("/login").post(Login);
router.route('/addProducts').post(verifyToken,AddProducts)
router.route('/deleteProduct/:id').delete(verifyToken,DeleteProducts)
router.route('/viewAllProduct').get(ViewAllProducts)
router.route("/addGallery").post(verifyToken,AddGalley)
router.route("/viewAllGallery").get(viewAllGallery)
router.route("/deleteGallery/:id").delete(verifyToken,DeleteGallery)

module.exports = router;
