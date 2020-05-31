const express = require('express');
const router = express.Router();
const datos_socioeconomicos_Controller = require('../controllers/datos_socioeconomicos_controller');

router.get('/', datos_socioeconomicos_Controller.list_datos_socioeconomicos);
router.get('/:Id',datos_socioeconomicos_Controller.get_datos_socioeconomicos);
router.post('/',datos_socioeconomicos_Controller.create_datos_socioeconomicos);
router.put('/:Id',datos_socioeconomicos_Controller.update_datos_socioeconomicos);
router.delete('/:Id',datos_socioeconomicos_Controller.delete_datos_socioeconomicos);

module.exports = router;