
# Free File Uploader 🌱

[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://img.shields.io/badge/license-MIT-brightgreen.svg)

Free upload is a package for uploading & keeping image to google-cloud/storage via firebase without charge or adding credit card.


**Note:** Need some firebase credentials and Google cloud credential.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm i freeupload
```

## Usages

```javascript
const express = require("express");
const bodyParser = require("body-parser");
const freeUpload = require("freeupload");
const Multer = require('multer');

const keyFilename = 'serviceaccount.json'; //keep the file (downloaded from google cloud service account) in your ptojects root directory and replace the serviceaccount.json with the filename
const bucketName = 'projectId.appspot.com'; // replace projectId with your firebase project Id
const projectId = "projectId"; // replace projectId with your firebase project Id

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
```


# Firebase credentailas manage

##Steps
Go to [firebase console](https://console.firebase.google.com/)
### 1
[![1](https://user-images.githubusercontent.com/18731391/64836963-18794e00-d60e-11e9-9f6b-ea034602c27c.png)](https://user-images.githubusercontent.com/18731391/64836963-18794e00-d60e-11e9-9f6b-ea034602c27c.png)
### 2
[![2](https://user-images.githubusercontent.com/18731391/64837009-452d6580-d60e-11e9-8b9d-bbe9a97aeab4.png)](https://user-images.githubusercontent.com/18731391/64837009-452d6580-d60e-11e9-8b9d-bbe9a97aeab4.png)
### 3
[![3](https://user-images.githubusercontent.com/18731391/64837030-57a79f00-d60e-11e9-8afb-200dcff76bcf.png)](https://user-images.githubusercontent.com/18731391/64837030-57a79f00-d60e-11e9-8afb-200dcff76bcf.png)
### 4
[![4](https://user-images.githubusercontent.com/18731391/64837067-80c82f80-d60e-11e9-8232-138282b4d7f5.png)](https://user-images.githubusercontent.com/18731391/64837067-80c82f80-d60e-11e9-8232-138282b4d7f5.png)
### 5
[![5](https://user-images.githubusercontent.com/18731391/64837077-8f164b80-d60e-11e9-8f71-30c44a3c57fe.png)](https://user-images.githubusercontent.com/18731391/64837077-8f164b80-d60e-11e9-8f71-30c44a3c57fe.png)
### 6
[![6](https://user-images.githubusercontent.com/18731391/64837084-99384a00-d60e-11e9-88f2-feb5b9c59039.png)](https://user-images.githubusercontent.com/18731391/64837084-99384a00-d60e-11e9-88f2-feb5b9c59039.png)
### 7
[![7](https://user-images.githubusercontent.com/18731391/64837620-31373300-d611-11e9-9388-29f9e26774a2.png)](https://user-images.githubusercontent.com/18731391/64837620-31373300-d611-11e9-9388-29f9e26774a2.png)
### 8
[![8](https://user-images.githubusercontent.com/18731391/64837091-abb28380-d60e-11e9-856b-1bdbb79e317b.png)](https://user-images.githubusercontent.com/18731391/64837091-abb28380-d60e-11e9-856b-1bdbb79e317b.png)
### 9
[![9](https://user-images.githubusercontent.com/18731391/64908998-418e0180-d728-11e9-9f36-5993e5479c81.png)](https://user-images.githubusercontent.com/18731391/64908998-418e0180-d728-11e9-9f36-5993e5479c81.png)


# Google cloud credentailas manage

##Steps
### 1
[![10](https://user-images.githubusercontent.com/18731391/64908730-a1cf7400-d725-11e9-90a6-74f02f8c85c6.png)](https://user-images.githubusercontent.com/18731391/64908730-a1cf7400-d725-11e9-90a6-74f02f8c85c6.png)

### 2
[![11](https://user-images.githubusercontent.com/18731391/64908751-d2171280-d725-11e9-890a-09813a5fdbcb.png)](https://user-images.githubusercontent.com/18731391/64908751-d2171280-d725-11e9-890a-09813a5fdbcb.png)

### 3
[![12](https://user-images.githubusercontent.com/18731391/64908764-ec50f080-d725-11e9-9311-dab0c754dc78.png)](https://user-images.githubusercontent.com/18731391/64908764-ec50f080-d725-11e9-9311-dab0c754dc78.png)

### 4
[![13](https://user-images.githubusercontent.com/18731391/64908775-ff63c080-d725-11e9-8d23-1be634937626.png)](https://user-images.githubusercontent.com/18731391/64908775-ff63c080-d725-11e9-8d23-1be634937626.png)

### 5
[![14](https://user-images.githubusercontent.com/18731391/64908784-14d8ea80-d726-11e9-98bd-8657d9135ae7.png)](https://user-images.githubusercontent.com/18731391/64908784-14d8ea80-d726-11e9-98bd-8657d9135ae7.png)

### 6
[![15](https://user-images.githubusercontent.com/18731391/64908798-2c17d800-d726-11e9-9c64-1e64d0c29ad0.png)](https://user-images.githubusercontent.com/18731391/64908798-2c17d800-d726-11e9-9c64-1e64d0c29ad0.png)

### 7
[![16](https://user-images.githubusercontent.com/18731391/64908838-a3e60280-d726-11e9-96d2-33f80ae95f16.png)](https://user-images.githubusercontent.com/18731391/64908838-a3e60280-d726-11e9-96d2-33f80ae95f16.png)

### 8
[![17](https://user-images.githubusercontent.com/18731391/64909386-2bcf0b00-d72d-11e9-846d-69e2935f8b89.png)](https://user-images.githubusercontent.com/18731391/64909386-2bcf0b00-d72d-11e9-846d-69e2935f8b89.png)

### 9
[![18](https://user-images.githubusercontent.com/18731391/64909403-54ef9b80-d72d-11e9-922d-ad42f3758c7b.png)](https://user-images.githubusercontent.com/18731391/64909403-54ef9b80-d72d-11e9-922d-ad42f3758c7b.png)

### 10
[![19](https://user-images.githubusercontent.com/18731391/64909405-66d13e80-d72d-11e9-859e-1b66ce09203c.png)](https://user-images.githubusercontent.com/18731391/64909405-66d13e80-d72d-11e9-859e-1b66ce09203c.png)

### 11
[![20](https://user-images.githubusercontent.com/18731391/64909410-794b7800-d72d-11e9-9bd0-a0a3539c2ad4.png)](https://user-images.githubusercontent.com/18731391/64909410-794b7800-d72d-11e9-9bd0-a0a3539c2ad4.png)

### 12
[![21](https://user-images.githubusercontent.com/18731391/64909412-88322a80-d72d-11e9-9a1c-255c25fbd769.png)](https://user-images.githubusercontent.com/18731391/64909412-88322a80-d72d-11e9-9a1c-255c25fbd769.png)

### 13
[![22](https://user-images.githubusercontent.com/18731391/64909424-a5ff8f80-d72d-11e9-848a-671a64475400.png)](https://user-images.githubusercontent.com/18731391/64909424-a5ff8f80-d72d-11e9-848a-671a64475400.png)

### 14
[![23](https://user-images.githubusercontent.com/18731391/64909433-b9125f80-d72d-11e9-9b23-e405f8173bbc.png)](https://user-images.githubusercontent.com/18731391/64909433-b9125f80-d72d-11e9-9b23-e405f8173bbc.png)
