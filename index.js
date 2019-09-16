const {Storage} = require ('@google-cloud/storage');
const {format} = require('util');
exports.upload = function(file, fileName, bucketName, projectId){
    const storage = new Storage({
        projectId: projectId,
        keyFilename: `./${fileName}`
      });
      
      const bucket = storage.bucket (bucketName);
      return new Promise ((resolve, reject) => {
        if (!file) {
          reject ('No image file');
        }
        let newFileName = `${file.originalname}_${Date.now ()}`;
    
        const blob = bucket.file (newFileName);
    
        const blobStream = blob.createWriteStream ({
          metadata: {
            contentType: file.mimetype,
          },
        });
    
        blobStream.on ('error', error => {
          console.log (error);
        });
    
        blobStream.on ('finish', () => {
          const publicUrl = format (
            `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${blob.name}?alt=media`
          );
          resolve (publicUrl);
        });
    
        blobStream.end (file.buffer);
      });
}
