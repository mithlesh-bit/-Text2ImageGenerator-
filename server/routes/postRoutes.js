import express from 'express'
import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary'
import Post from '../mongodb/models/post.js'

dotenv.config();

const router=express.Router();
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})

router.route('/').get(async(req,resp)=>{
    try {
        const posts=await Post.find({});
        resp.status(200).json({success:true, data:posts})
    } catch (error) {
        resp.status(500).json({success:false, message:error})
    }

})

router.route('/').post(async(req,resp)=>{
  try {
    const {name, prompt, photo}=req.body;
    const photoUrl= await cloudinary.uploader.upload(photo);
    const newPost = await Post.create({
        name,
        prompt,
        photo:photoUrl.url
    })
    
    resp.status(200).json({success:true, data:newPost})
    
  } catch (error) {
    resp.status(500).json({success:false, message:error})
  } 
})

export default router;