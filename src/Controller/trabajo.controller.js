const {getConnection, sql} = require('../database/connection')
const { querys } = require('../database/query')


const getTrabajo = async (req, res, next) => {
  try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getallTrabajo);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
}

const postTrabajo = async (req, res, next) => {
  try {
    const { descriccion, uuidempleado,uuidareatrabajo, sueldofijo } = req.body

    const pool = await getConnection()
    const result = await pool.request()
    .input('DESCRIPCION', descriccion)
    .input('UUIDEMPLEADO', uuidempleado)
    .input('UUIDAREATRABAJO', uuidareatrabajo)
    .input('SUELDOFIJO', sueldofijo)
    .execute('INSERT_TRABAJO')

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
  getTrabajo,
  postTrabajo
}