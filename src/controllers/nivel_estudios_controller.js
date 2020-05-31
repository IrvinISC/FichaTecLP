const nivel_estudios = require('../models/nivel_estudios');

module.exports = {
    list_nivel_estudios: async (req, res, next) => {
        const registro = await nivel_estudios.find()
        res.json(registro);
    },
    create_nivel_estudios: async (req, res, next) => {
        const nuevoRegistro = new nivel_estudios(req.body);
        const registro = await nuevoRegistro.save();
        //res.json(registro);
        res.redirect('/');
    },
    get_nivel_estudios: async (req, res, next) => {
        const {Id} = req.params;
        const registro = await nivel_estudios.findById(Id);
        res.json(registro);
    },
    update_nivel_estudios: async (req, res, next) => {
        const {Id} = req.params;
        const nuevoRegistro = req.body;
        const antRegistro = await nivel_estudios.findByIdAndUpdate(Id, nuevoRegistro);
        res.json({success: true});
    },
    delete_nivel_estudios: async (req, res, next) => {
        const {Id} = req.params;
        const antRegistro = await nivel_estudios.findByIdAndDelete(Id);
        res.json({success: true});
    }
}