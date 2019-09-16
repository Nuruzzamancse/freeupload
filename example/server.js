const express = require("express");
const bodyParser = require("body-parser");
const freeUpload = require("freeupload");
const Multer = require('multer');

const keyFilename = 'freeupload-test-30df1332fed4.json'; // keep the downloaded file (google cloud service account json private key) in projects root directory
const bucketName = 'freeupload-test.appspot.com'; // replace with your firbase projectId
const projectId = "freeupload-test"; // replace with your firbase projectId

const app = express();

const multer = Multer ({
  storage: Multer.memoryStorage (),
  limits: {
    fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
  },
});

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post (
  '/upload',
  multer.single ('file'),
  async (req, res) => {
    let file = req.file;
        if (file) {
          try{
            let url = await freeUpload.upload (file, keyFilename , bucketName, projectId);
            res.json(url);
          }
          catch(err){

          }
        }
  }
);

const port = process.env.PORT || 8085;
app.listen(port, () => 
  console.log(`Server Running On Port ${port}`)
);
