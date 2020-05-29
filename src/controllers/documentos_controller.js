require('dotenv').config();
const Alumno = require('../models/documentos');
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
const fs = require('fs-extra');

module.exports = {
    list_documentos: async (req, res, next) => {
        const alumnos = await Alumno.find()
        res.json(alumnos);
    },
    create_documentos: async (req, res, next) => {
        var doc = req.files;
        console.log(doc[0].path);
        //----------------------------------------
        const result1 = await cloudinary.v2.uploader.upload(doc[0].path);
        console.log(result1);
        const newDoc1 = new Alumno({
            documentURL: result1.url, 
            public_id: result1.public_id
        });
        await newDoc1.save();
        await fs.unlink(doc[0].path);
        //-------------------------------------------
        const result2 = await cloudinary.v2.uploader.upload(doc[1].path);
        console.log(result2);
        const newDoc2 = new Alumno({
            documentURL: result2.url, 
            public_id: result2.public_id
        });
        await newDoc2.save();
        await fs.unlink(doc[1].path);
        //---------------------------------------
        const result3 = await cloudinary.v2.uploader.upload(doc[2].path);
        console.log(result3);
        const newDoc3 = new Alumno({
            documentURL: result3.url, 
            public_id: result3.public_id
        });
        await newDoc3.save();
        await fs.unlink(doc[2].path);
        //---------------------------------------
        const result4 = await cloudinary.v2.uploader.upload(doc[3].path);
        console.log(result4);
        const newDoc4 = new Alumno({
            documentURL: result4.url, 
            public_id: result4.public_id
        });
        await newDoc4.save();
        await fs.unlink(doc[3].path);
        //-----------------------------------------
        const result5 = await cloudinary.v2.uploader.upload(doc[4].path);
        console.log(result5);
        const newDoc5 = new Alumno({
            documentURL: result5.url, 
            public_id: result5.public_id
        });
        await newDoc5.save();
        await fs.unlink(doc[4].path);
        //-------------------------------------------
        const result6 = await cloudinary.v2.uploader.upload(doc[5].path);
        console.log(result6);
        const newDoc6 = new Alumno({
            documentURL: result6.url, 
            public_id: result6.public_id
        });
        await newDoc6.save();
        await fs.unlink(doc[5].path);
        //----------------------------------------------
        const result7 = await cloudinary.v2.uploader.upload(doc[6].path);
        console.log(result7);
        const newDoc7 = new Alumno({
            documentURL: result7.url, 
            public_id: result7.public_id
        });
        await newDoc7.save();
        await fs.unlink(doc[6].path);
        //----------------------------------------------
        const result8 = await cloudinary.v2.uploader.upload(doc[7].path);
        console.log(result8);
        const newDoc8 = new Alumno({
            documentURL: result8.url, 
            public_id: result8.public_id
        });
        await newDoc8.save();
        await fs.unlink(doc[7].path);
        //-----------------------------------------------
        const result9 = await cloudinary.v2.uploader.upload(doc[8].path);
        console.log(result9);
        const newDoc9 = new Alumno({
            documentURL: result9.url, 
            public_id: result9.public_id
        });
        await newDoc9.save();
        await fs.unlink(doc[8].path);
        //-------------------------------------------------
        res.redirect('/');
    },
    get_documentos: async (req, res, next) => {
        const {alumnoId} = req.params;
        const alumno = await Alumno.findById(alumnoId);
        res.json(alumno);
    },
    update_documentos: async (req, res, next) => {
        const {alumnoId} = req.params;
        const nuevoAlumno = req.body;
        const antAlumno = await Alumno.findByIdAndUpdate(alumnoId, nuevoAlumno);
        res.json({success: true});
    },
    delete_documentos: async (req, res, next) => {
        const {alumnoId} = req.params;
        const antAlumno = await Alumno.findByIdAndDelete(alumnoId);
        res.json({success: true});
    }
}