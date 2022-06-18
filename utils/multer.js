const multer = require("multer");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "temp");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
  },
});


const multerFilter = (req, file, cb) => {
  if (["jpg", "png", "jpeg"].includes(file.mimetype.split("/")[1])) {
    cb(null, true);
  } else {
    cb(new Error("Not a JPG File!!"), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

module.exports = upload;
