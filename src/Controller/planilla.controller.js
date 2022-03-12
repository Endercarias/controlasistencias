const {getConnection, sql} = require('../database/connection')
const { querys } = require('../database/query')



const getBitacora = async (req, res, next) => {
  try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getAllBitacore);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
}

const postPlanilla = async (req, res, next) => {
    try {
      const { Mes, Anio } = req.body
  
      const pool = await getConnection()
      const result = await pool.request()
      .input('Mes', Mes)
      .input('Anio', Anio)
      .execute('CalculoNomina')
  
      
      res.json(result.recordsets[0]);
  
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

  module.exports = {
      postPlanilla,
      getBitacora
  }

