const {getConnection, sql} = require('../database/connection')
const { querys } = require('../database/query')


const getDetallePagos = async (req, res, next) => {
  try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getAllDetallePagos);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
}

const postDetallePagos = async (req, res, next) => {
  try {
    const { bonificacion, uuidEmpleado, uuidPagos  } = req.body

    const pool = await getConnection()
    const result = await pool.request()
    .input('BONIFICACION', bonificacion)
    .input('UUIDEMPLEADO', uuidEmpleado)
    .input('UUIDPAGOS', uuidPagos)
    .execute('INSERT_DETALLE_PAGOS')

    const data = {
        message: 'Sea insertado correctamente',
        status: true,
        rowsAffected: result.rowsAffected
    }
    
    res.json(data);

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getDetallePagos,
  postDetallePagos
}