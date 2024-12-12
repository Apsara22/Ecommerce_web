const express = require('express') //first 3 line are express code
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer') //Multer is a valuable tool for managing file uploads in Node. js
const path = require('path')
const UserModel = require('./models/model')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

mongoose.connect('mongodb://127.0.0.1:27017/todos')

const storage = multer.diskStorage({  //const storage is upload and storage the image
    destination: (req, file, cb) =>{
        cb(null, 'public/Images')
    }, 
    filename:(req, file, cb) =>{
        cb(null,file.filename +"_"+Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage:storage
})

app.post('/upload', upload.single('file'), (req,res) =>{
UserModel.create({image:req.file.fieldname})
.then(result => res.json(result))
.catch(err => console.log(err))
})

app.get('/getImage', (req, res) =>{
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.listen(8000,() =>{
    console.log("server is running")
})