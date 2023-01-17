const express= require('express')
const multer = require('multer')
const { getPost, createPost } = require('../controllers/postController')
const router=express.Router();
const path = require('path')



const storage = multer.diskStorage({
    destination: './src/uploads',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});
const upload = multer({ storage: storage });


/**  --------- Customer's API's ---------- **/
router.post('/upload-post', upload.single("file_name") , createPost)
router.get('/get-posts', getPost )


router.get('/testing', (_req, res) => {
    return res.status(200).send({status: true, message: " Hello Testing API is Live"})})
router.all('/**', (_req, res) => {
    return res.status(404).send({status: false, message: " Requested API not Available"})})

module.exports=router; 