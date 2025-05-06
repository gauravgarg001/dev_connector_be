const multer = require('multer');
const path = require('path');

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const isImage = file.fieldname === 'photo';
  const isVideo = file.fieldname === 'video';

  const ext = path.extname(file.originalname).toLowerCase();
  const mime = file.mimetype;

  if (isImage && /\.(jpg|jpeg|png)$/.test(ext) && /^image\//.test(mime)) {
    cb(null, true);
  } else if (isVideo && /\.(mp4|mov)$/.test(ext) && /^video\//.test(mime)) {
    cb(null, true);
  } else {
    cb(new Error(`Invalid file type for ${file.fieldname}`));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024 // max 10 MB per file
  }
}).fields([
  { name: 'photo', maxCount: 1 },
  { name: 'video', maxCount: 1 }
]);

const handleUpload = (req, res, next) => {
  console.log(req.body)
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: `Multer error: ${err.message}` });
    } else if (err) {
      return res.status(400).json({ error: `File upload failed: ${err.message}` });
    }
    next();
  });
};

module.exports = handleUpload;
