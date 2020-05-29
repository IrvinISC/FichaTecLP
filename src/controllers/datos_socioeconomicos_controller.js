const Alumno = require('../models/datos_socioeconomicos');

module.exports = {
    list_datos_socioeconomicos: async (req, res, next) => {
        const alumnos = await Alumno.find()
        res.json(alumnos);
    },
    create_datos_socioeconomicos: async (req, res, next) => {
        const nuevoAlumno = new Alumno(req.body);
        const alumno = await nuevoAlumno.save();
        //res.json(alumno);
        res.redirect('/');
    },
    get_datos_socioeconomicos: async (req, res, next) => {
        const {alumnoId} = req.params;
        const alumno = await Alumno.findById(alumnoId);
        res.json(alumno);
    },
    update_datos_socioeconomicos: async (req, res, next) => {
        const {alumnoId} = req.params;
        const nuevoAlumno = req.body;
        const antAlumno = await Alumno.findByIdAndUpdate(alumnoId, nuevoAlumno);
        res.json({success: true});
    },
    delete_datos_socioeconomicos: async (req, res, next) => {
        const {alumnoId} = req.params;
        const antAlumno = await Alumno.findByIdAndDelete(alumnoId);
        res.json({success: true});
    }
}