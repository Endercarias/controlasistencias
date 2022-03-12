const {Router} = require('express')
const router = Router();

const { getTrabajo, postTrabajo } = require('../Controller/trabajo.controller')

router.get('/trabajo', getTrabajo)
router.post('/trabajo', postTrabajo)


module.exports = router