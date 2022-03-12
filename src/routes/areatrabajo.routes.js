const {Router} = require('express')
const router = Router();

const { getAreaTrabajo, postAreaTrabajo} = require('../Controller/areatrabajo.controller')

router.get('/areatrabajo', getAreaTrabajo)
router.post('/areatrabajo', postAreaTrabajo)


module.exports = router