const express = require('express');
const router = express.Router();
const documentos_Controller = require('../controllers/documentos_controller');

router.get('/', documentos_Controller.list_documentos);
router.get('/:alumnoId',documentos_Controller.get_documentos);
router.post('/',documentos_Controller.create_documentos);
router.put('/:alumnoId',documentos_Controller.update_documentos);
router.delete('/:alumnoId',documentos_Controller.delete_documentos);

module.exports = router;