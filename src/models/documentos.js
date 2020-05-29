var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var documentos_Schema = new Schema({
    documentURL:{
        type: String,
        require: true
    },
    public_id:{
        type: String,
        require: true
    }
});
module.exports = mongoose.model('documentos',documentos_Schema);