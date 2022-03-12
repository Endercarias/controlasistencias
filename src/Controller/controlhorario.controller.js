const {getConnection, sql} = require('../database/connection')
const { querys } = require('../database/query')


const getControlHorario = async (req, res, next) => {
  try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getAllControlHorario);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
}

const postControlHorario = async (req, res, next) => {
  try {
    const { fechamovimiento, uuidjornada, uuidempleado,tipomovimiento } = req.body

    const pool = await getConnection()
    const result = await pool.request()
    .input('FECHAMOVIMIENTO', fechamovimiento)
    .input('UUIDJORNADA', uuidjornada)
    .input('UUIDEMPLEADO', uuidempleado)
    .input('TIPOMOVIMIENTO', tipomovimiento)
    .execute('INSERT_CONTROLHORARIO_INGRESO_SALIDA')

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
    getControlHorario,
    postControlHorario
}