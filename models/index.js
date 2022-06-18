const { Deta } = require("deta");
const deta = Deta(process.env.DETA_PROJECT_KEY);
const Products = deta.Base("online_shop_products");
const ProductImages = deta.Drive("online_shop_product_images");

module.exports = { Products, ProductImages };
