const {Router} = require('express')
const router = Router();

const {getEmpleados,postEmpledo, updateEmpledo, deleteEmpledo} = require('../Controller/emplados.controller')


router.get("/empleado", getEmpleados);
router.post("/empleado", postEmpledo);
router.put("/empleado", updateEmpledo);
router.delete("/empleado", deleteEmpledo);

module.exports = router;