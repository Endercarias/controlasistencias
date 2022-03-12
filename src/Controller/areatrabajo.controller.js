const {getConnection, sql} = require('../database/connection')
const { querys } = require('../database/query')


const getAreaTrabajo = async (req, res, next) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getallAreaTrabajo);
        res.json(result.recordset);
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
}

const postAreaTrabajo = async (req, res, next) => {
    try {
      const { descripcion } = req.body
  
      const pool = await getConnection()
      const result = await pool.request()
      .input('DESCRIPCION', descripcion)
      .execute('INSERT_AREATRABAJO')

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
    getAreaTrabajo,
    postAreaTrabajo
}