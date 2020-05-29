const Alumno = require('../models/nivel_estudios');

module.exports = {
    list_nivel_estudios: async (req, res, next) => {
        const alumnos = await Alumno.find()
        res.json(alumnos);
    },
    create_nivel_estudios: async (req, res, next) => {
        const nuevoAlumno = new Alumno(req.body);
        const alumno = await nuevoAlumno.save();
        //res.json(alumno);
        res.redirect('/');
    },
    get_nivel_estudios: async (req, res, next) => {
        const {alumnoId} = req.params;
        const alumno = await Alumno.findById(alumnoId);
        res.json(alumno);
    },
    update_nivel_estudios: async (req, res, next) => {
        const {alumnoId} = req.params;
        const nuevoAlumno = req.body;
        const antAlumno = await Alumno.findByIdAndUpdate(alumnoId, nuevoAlumno);
        res.json({success: true});
    },
    delete_nivel_estudios: async (req, res, next) => {
        const {alumnoId} = req.params;
        const antAlumno = await Alumno.findByIdAndDelete(alumnoId);
        res.json({success: true});
    }
}