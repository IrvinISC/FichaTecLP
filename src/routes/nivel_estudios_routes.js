const express = require('express');
const router = express.Router();
const nivel_estudios_Controller = require('../controllers/nivel_estudios_controller');

router.get('/', nivel_estudios_Controller.list_nivel_estudios);
router.get('/:Id',nivel_estudios_Controller.get_nivel_estudios);
router.post('/',nivel_estudios_Controller.create_nivel_estudios);
router.put('/:Id',nivel_estudios_Controller.update_nivel_estudios);
router.delete('/:Id',nivel_estudios_Controller.delete_nivel_estudios);

module.exports = router;