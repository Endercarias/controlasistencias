const {Router} = require('express')
const router = Router();

const { getPagos, postPagos } = require('../Controller/pago.controller')
const { getDetallePagos, postDetallePagos } = require('../Controller/detallepago.controller')

router.get('/pagos', getPagos)
router.post('/pagos', postPagos)

router.get('/detallepagos', getDetallePagos)
router.post('/detallepagos', postDetallePagos)


module.exports = router