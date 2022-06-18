const { Products } = require("../models/index");

// Home
exports.home = async (req, res) => {
  const products = await  Products.fetch();
  console.log(products);
  // res.render("home", {
  //   data: products,
  // });
  res.render("home")
};

exports.getAllProducts = async (req, res) => {
  const products = await Products.fetch();
  res.send(products);
};
