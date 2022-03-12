const {getConnection, sql} = require('../database/connection')
const { querys } = require('../database/query')


const getActividades = async (req, res, next) => {
  try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getallActividades);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
}

const postActividades = async (req, res, next) => {
  try {
    const { descripcion, uuidTrabajo,precio } = req.body

    const pool = await getConnection()
    const result = await pool.request()
    .input('DESCRIPCION', descripcion)
    .input('UUIDTRABAJO', uuidTrabajo)
    .input('PRECIO', precio)
    .execute('INSERT_ACTIVIDADES')

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
  getActividades,
  postActividades
}