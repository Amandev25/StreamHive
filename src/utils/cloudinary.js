import { v2 as cloudinary } from 'cloudinary';
 import fs from "fs" ;


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.cloud_name, 
        api_key: process.env.api_key, 
        api_secret: process.env.api_secret // Click 'View API Keys' above to copy your API secret
    });
    
// Upload function

const uploadOnCloudniary = async (localFilePath) => {
    try {
        if(!localFilePath)
        {return null}
         const reponse = await cloudinary.uploader.upload(
            localFilePath, {
                resource_type: "auto"
            }

        )
        console.log("File uploaded on Cloudinary:", reponse.url);

        // Once the file is uploaded, we would like to delete it from our server
        fs.unlinkSync(localFilePath)
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null;
    }
}