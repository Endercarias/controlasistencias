
const {getConnection, sql} = require('../database/connection')
const { querys } = require('../database/query')


const getEmpleados = async (req, res, next) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getAllEmploye);
        res.json(result.recordset);
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
}

module.exports = {
    getEmpleados
}