const datos_personales = require('../models/datos_personales');

module.exports = {
    list_datos_personales: async (req, res, next) => {
        const registro = await datos_personales.find()
        res.json(registro);
    },
    create_datos_personales: async (req, res, next) => {
        const nuevoRegistro = new datos_personales(req.body);
        const registro = await nuevoRegistro.save();
        //res.json(registro);
        res.redirect('/');
    },
    get_datos_personales: async (req, res, next) => {
        const {Id} = req.params;
        const registro = await datos_personales.findById(Id);
        res.json(registro);
    },
    update_datos_personales: async (req, res, next) => {
        const {Id} = req.params;
        const nuevoRegistro = req.body;
        const antRegistro = await datos_personales.findByIdAndUpdate(Id, nuevoRegistro);
        res.json({success: true});
    },
    delete_datos_personales: async (req, res, next) => {
        const {Id} = req.params;
        const antRegistro = await datos_personales.findByIdAndDelete(Id);
        res.json({success: true});
    }
}