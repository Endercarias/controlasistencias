const {Router} = require('express')
const router = Router();

const { getJornada, postJornada } = require('../Controller/jornadas.controller')

router.get('/jornada', getJornada)
router.post('/jornada', postJornada)


module.exports = router