const multer = require('multer')
const path = require('path')

let contactList = []
let fileName = ''

// Set Storage engine
const storager = multer.diskStorage({
  destination: 'public/uploads/avatars',
  filename: (req, file, cb) => {
    fileName = 'av.' + Date.now + path.extname(file.originalname)
    cb(null, fileName)
  }
})

// init upload
const upload = multer({
  storage: storager
}).single('avatar') // i recall the Name Attribute from my Html file

exports.homeRoute = (req, res) => {
  res.render('index', { contactData: contactList })
}

exports.newContact = (req, res) => {
  upload(req, res, () => {
    let newContact = {
      name: req.body.name,
      email: req.body.email,
      avatar: fileName
    }
    contactList.push(newContact)
    console.log(contactList)

    // on here we will process the image to resize
    res.redirect('/')
  })
}
