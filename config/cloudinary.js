const cloudinary = require("cloudinary").v2; //! Cloudinary is being required

exports.cloudinaryConnect = () => {
	try {
		cloudinary.config({
			//!    ########   Configuring the Cloudinary to Upload MEDIA ########
			cloud_name: process.env.cloudname,
			api_key: process.env.apikey,
			api_secret: process.env.apisecret,
		});
	} catch (error) {
		console.log(error);
	}
};
