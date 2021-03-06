const express = require('express');
const router = express.Router();
const datos_personales_Controller = require('../controllers/datos_personales_controller');

router.get('/', datos_personales_Controller.list_datos_personales);
router.get('/:Id',datos_personales_Controller.get_datos_personales);
router.post('/',datos_personales_Controller.create_datos_personales);
router.put('/:Id',datos_personales_Controller.update_datos_personales);
router.delete('/:Id',datos_personales_Controller.delete_datos_personales);

module.exports = router;