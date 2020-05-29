const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const datos_personalesRoutes = require('../src/routes/datos_personales_routes');
const nivel_estudiosRoutes = require('../src/routes/nivel_estudios_routes');
const datos_socioeconomicosRoutes = require('../src/routes/datos_socioeconomicos_routes');
const documentosRoutes = require('../src/routes/documentos_routes');
const app = express();
const dbUri = 'mongodb+srv://FichaTecLP:5BjBXNJA9f7SwJ!@cluster0-vermf.mongodb.net/FichaTecLP?retryWrites=true&w=majority';
const dbEvents = mongoose.connection;

const {v4: uuidv4} = require("uuid");
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase());
    },
    fileFilter: (req, file, next) => {
        const filterTypes = /jpg|jpeg|png|gif|pdf/;
        const filetype = filterTypes.test(file.mimetype);
        const extname = filterTypes.test(path.extname(file.originalname));
        if(filetype && extname){
            return next(null, true);
        }else{
            next('error: tipo de archivo no soportado');
        }
    }
});

mongoose.connect(dbUri,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true
})
.catch(err => console.log(err))

dbEvents.once('open', _ => {
    console.log('Database is connected to ', dbUri);
});

dbEvents.on('error', err => {
    console.log(err);
});

//puerto
app.set('port', process.env.PORT);
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(multer(
    {
        storage,
        limits: {fileSize: 1000000}
    }).any('documento1','documento2','documento3','documento4','documento5','documento6','documento7','documento8','documento9'));

//rutas
app.use('/datos_personales',datos_personalesRoutes);
app.use('/nivel_estudios',nivel_estudiosRoutes);
app.use('/datos_socioeconomicos',datos_socioeconomicosRoutes);
app.use(documentosRoutes);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'index.html'));
});