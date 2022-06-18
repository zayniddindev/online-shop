const fs = require("fs");
const { Products, ProductImages } = require("../models/index");

exports.create = async (req, res) => {
  const { name, price, description } = req.body;
  console.log({ name, price, description });

  if (!(name && price && description)) {
    return res.status(400).send("Missing required fields");
  }else if(!req.file){
    return res.status(400).send("Missing image");
  }else{
    try {
      const product = await Products.put({ name, price, description });
      const ext = "." + req.file.mimetype.split("/")[1]
      const image = await ProductImages.put(product["key"] + ext, {
        path: "./temp/" + req.file.filename,
      });
      fs.unlinkSync("./temp/" + req.file.filename);
      console.log(image);
      res.send(product);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
};
