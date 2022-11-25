const asyncHandler = require("express-async-handler");
const db = require("../config/db");
const collection = require("../config/collection");
const generateToken = require("../utils/jwtToken");
const { ObjectId } = require("mongodb");
const { GALLERY_COLLECTION } = require("../config/collection");

const Login = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, password } = req.body;
  if (name == "vijayatrads" && password == "asdfghjkl") {
    const token = generateToken(password);

    res.status(200).json(token);
  } else {
    res.status(401).json("Invalid Details");
  }
});
const AddProducts = asyncHandler(async (req, res) => {
  console.log(req.body);
  const productData = req.body;
  const addproducts = await db
    .get()
    .collection(collection.PRODUCT_COLLECTION)
    .insertOne(productData);
  if (addproducts) {
    res.status(200).json("Success");
  } else {
    res.status(500).json("Somthing Went Wrong");
  }
});

const DeleteProducts = asyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log(id, "jhh");
  const delteProducts = await db
    .get()
    .collection(collection.PRODUCT_COLLECTION)
    .deleteOne({ _id: ObjectId(id) });
  if (delteProducts) {
    res.status(200).json("Success");
  } else {
    res.status(500).json("Somthing Went Wrong");
  }
});
const ViewAllProducts = asyncHandler(async (req, res) => {
  const ViewAllProducts = await db
    .get()
    .collection(collection.PRODUCT_COLLECTION)
    .find()
    .toArray();
  console.log(ViewAllProducts, "fmdfkdskfsk");
  if (ViewAllProducts) {
    res.status(200).send(ViewAllProducts);
  } else {
    res.status(500).json("Somthing Went wrong");
  }
});
const AddGalley = asyncHandler((req, res) => {

  const obj = req.body
  console.log(obj);
  const add = db.get().collection(GALLERY_COLLECTION).insertOne(obj)
  if (add) {
    res.status(200).json("Success")
  } else {
    res.status(500).json("Somthing Went Wrong")
  }
})
const viewAllGallery = asyncHandler(async (req, res) => {
  const AllGallery = await db.get().collection(GALLERY_COLLECTION).find().toArray()
  if (AllGallery) {
    res.status(200).json(AllGallery)
  } else {
    res.status(201).json("Gallery Empty")
  }
})
const DeleteGallery=asyncHandler(async(req,res)=>{
  const id=req.params.id
  const deleteGellery=await db.get().collection(GALLERY_COLLECTION).deleteOne({_id:ObjectId(id)})
 if(deleteGellery){
  res.status(200).json(deleteGellery)
 }else{
  res.status(500).json("Something Went Wrong ")
 }
})

module.exports = { Login, AddProducts, DeleteProducts, ViewAllProducts, AddGalley,viewAllGallery ,DeleteGallery};
