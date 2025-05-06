const express = require("express");
const { register } = require("../controller/authController");
const validateRegistration = require("../middleware/auth.middleware");
const router = express.Router();
const handleUpload = require('../middleware/upload.middleware');
const { uploadFiles } = require('../utils/fileUpload');

router.post("/register", 
  handleUpload, 
  async (req, res, next) => {
    try {
      req.body = {
        ...req.body,
        ...(req.files && await uploadFiles(req.files))
    };
    next();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  validateRegistration, 
  register
);

module.exports = router;