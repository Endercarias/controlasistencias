const {Router} = require('express')
const router = Router();

const { postPlanilla,getBitacora } = require('../Controller/planilla.controller')

router.post('/calculonomina', postPlanilla)
router.get('/bitacora', getBitacora)


module.exports = router