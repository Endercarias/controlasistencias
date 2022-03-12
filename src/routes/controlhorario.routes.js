const {Router} = require('express')
const router = Router();

const { getControlHorario, postControlHorario} = require('../Controller/controlhorario.controller')

router.get('/controlhorario', getControlHorario)
router.post('/controlhorario', postControlHorario)


module.exports = router