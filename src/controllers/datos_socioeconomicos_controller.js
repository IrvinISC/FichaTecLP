const datos_socioeconomicos = require('../models/datos_socioeconomicos');

module.exports = {
    list_datos_socioeconomicos: async (req, res, next) => {
        const registro = await datos_socioeconomicos.find()
        res.json(registro);
    },
    create_datos_socioeconomicos: async (req, res, next) => {
        const nuevoRegistro = new datos_socioeconomicos(req.body);
        const registro = await nuevoRegistro.save();
        //res.json(registro);
        res.redirect('/');
    },
    get_datos_socioeconomicos: async (req, res, next) => {
        const {Id} = req.params;
        const registro = await datos_socioeconomicos.findById(Id);
        res.json(registro);
    },
    update_datos_socioeconomicos: async (req, res, next) => {
        const {Id} = req.params;
        const nuevoRegistro = req.body;
        const antRegistro = await datos_socioeconomicos.findByIdAndUpdate(Id, nuevoRegistro);
        res.json({success: true});
    },
    delete_datos_socioeconomicos: async (req, res, next) => {
        const {Id} = req.params;
        const antRegistro = await datos_socioeconomicos.findByIdAndDelete(Id);
        res.json({success: true});
    }
}