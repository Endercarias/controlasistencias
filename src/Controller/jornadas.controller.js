const {getConnection, sql} = require('../database/connection')
const { querys } = require('../database/query')


const getJornada = async (req, res, next) => {
  try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getallJornada);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
}

const postJornada = async (req, res, next) => {
  try {
    const { tipojornada } = req.body

    const pool = await getConnection()
    const result = await pool.request()
    .input('TIPOJORNADA', tipojornada)
    .execute('INSERT_JORNADA')

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
    getJornada,
    postJornada
}