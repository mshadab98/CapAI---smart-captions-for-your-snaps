const generateCaption = require('../service/ai.service')
const uploadFile = require('../service/storage.service')
import { v4 as uuidv4 } from "uuid";
const postModel = require('../models/post.model')

async function createPostController (req,res){
    const file = req.file;
    console.log('file',file)

    const base64Image =  Buffer.from(file.buffer).toString('base64')
    const caption = await generateCaption(base64Image)
    const result = await uploadFile(file.buffer, `${uuidv4()}`)
const post = await postModel.create({
    caption:caption,
    image : result.url,
    user : req.user._id
})

res.status(201).json({
    message:"Post created successfully",
    post
})
}

module.exports = {
    createPostController
}