require('dotenv').config();
const documentos = require('../models/documentos');
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
module.exports = {
    list_documentos: async (req, res, next) => {
        const registro = await documentos.find()
        res.json(registro);
    },
    create_documentos: async (req, res, next) => {
        var doc = req.files;
        for(i = 0;i < 9;i++){
            console.log(doc[i].path);
            const result1 = await cloudinary.v2.uploader.upload(doc[i].path);
            console.log(result1);
            const newDoc1 = new documentos({
                documentURL: result1.url, 
                public_id: result1.public_id
            });
            await newDoc1.save();
        }
        res.redirect('/');
    },
    get_documentos: async (req, res, next) => {
        const {Id} = req.params;
        const registro = await documentos.findById(Id);
        res.json(registro);
    },
    update_documentos: async (req, res, next) => {
        const {Id} = req.params;
        const nuevoRegistro = req.body;
        const antRegistro = await documentos.findByIdAndUpdate(Id, nuevoRegistro);
        res.json({success: true});
    },
    delete_documentos: async (req, res, next) => {
        const {Id} = req.params;
        const antRegistro = await documentos.findByIdAndDelete(Id);
        res.json({success: true});
    }
}