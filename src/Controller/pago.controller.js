const {getConnection, sql} = require('../database/connection')
const { querys } = require('../database/query')


const getPagos = async (req, res, next) => {
  try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getAllPagos);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
}

const postPagos = async (req, res, next) => {
  try {
    const { horastotales, limitesordinarios } = req.body

    const pool = await getConnection()
    const result = await pool.request()
    .input('HORASTOTALES', horastotales)
    .input('LIMITEORDINARIA', limitesordinarios)
    .execute('INSERT_PAGOS')

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
    getPagos,
  postPagos
}