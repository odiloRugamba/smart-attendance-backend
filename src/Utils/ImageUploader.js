/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
const extensions = ['jpg', 'jpeg', 'png', 'bmp', 'gif'];

export const upload = async (file) => {
  const image = await cloudinary.uploader.upload(file, (result) => result);
  return image;
};

export const manyImages = async (files) => {
  const urls = [];
  const image = Array.isArray(files) ? files : [files];
  for (const img of image) {
    const cloudFile = await upload(img.tempFilePath);
    urls.push(cloudFile.url);
  }
  return urls;
};

export const oneImage = async (img) => {
  const cloudFile = await upload(img.tempFilePath);
  if (cloudFile !== null) return cloudFile.url;
  return null;
};
