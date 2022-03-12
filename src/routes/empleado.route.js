const {Router} = require('express')

const {getEmpleados} = require('../Controller/emplados.controller')

const router = Router();

router.get("/products", getEmpleados);

module.exports = router;