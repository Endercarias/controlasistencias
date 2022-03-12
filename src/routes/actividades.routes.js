const {Router} = require('express')
const router = Router();

const {getActividades, postActividades} = require('../Controller/actividades.controller')

router.get('/actividades', getActividades)
router.post('/actividades', postActividades)


module.exports = router