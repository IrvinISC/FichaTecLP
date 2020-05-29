const { Router } = require('express');
const router = Router();

router.post('/subir', (req, res) => {
    console.log(req.file);
    res.redirect('/');
});

module.exports = router;