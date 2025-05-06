const {cloudinary} = require('../config/cloudinary');

const uploadToCloudinary = async (fileBuffer, options) => {
  return new Promise((resolve, reject) => {
    if (!fileBuffer) return resolve(null);
    
    cloudinary.uploader.upload_stream(options, (error, result) => {
      if (error) return reject(error);
      resolve(result);
    }).end(fileBuffer);
  });
};

const uploadFiles = async (files) => {
  const results = {};

  try {
    if (files.photo && files.photo[0]) {
      results.photo = await uploadToCloudinary(files.photo[0].buffer, {
        folder: 'user_uploads/photos',
        resource_type: 'image'
      });
    }

    if (files.video && files.video[0]) {
      results.video = await uploadToCloudinary(files.video[0].buffer, {
        folder: 'user_uploads/videos',
        resource_type: 'video'
      });
    }

    const result = {
      photo: results.photo?.secure_url || null,
      video: results.video?.secure_url || null
    };
    console.log('result', result);
    return result;
  } catch (error) {
    console.error('Upload error:', error);
    throw new Error('File upload failed');
  }
};

module.exports = { uploadFiles };