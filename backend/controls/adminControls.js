const asyncHandler = require("express-async-handler");
const db = require("../config/db");
const collection = require("../config/collection");
const generateToken = require("../utils/jwtToken");
const { ObjectId } = require("mongodb");

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

module.exports = { Login, AddProducts, DeleteProducts, ViewAllProducts };
