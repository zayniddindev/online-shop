const { Router } = require("express");
const { home, create } = require("../controllers");
const upload = require("../utils/multer");

const router = Router();

router.get("/", home.home);

router.get("/cart", (req, res) => {
  res.render("cart");
});

router.get("/create", (req, res) => {
  res.render("form");
});

router.get("/home", home.getAllProducts);

// New product
router.post("/newproduct", upload.single("image"), create.create);

module.exports = router;
