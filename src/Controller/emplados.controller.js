
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

const postEmpledo = async (req, res, next) => {
  try {
    const { primernombre, segundonombre, primerapellido, segundoapellido } = req.body

    const pool = await getConnection()
    const result = await pool.request()
    .input('PRIMERNOMBRE', primernombre)
    .input('SEGUNDONOMBRE', segundonombre)
    .input('PRIMERAPELLIDO', primerapellido)
    .input('SEGUNDOAPELLIDO', segundoapellido)
    .execute('INSERT_EMPLEADO')
    
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

const updateEmpledo = async (req, res, next) => {
  try {
    const { primernombre, segundonombre, primerapellido, segundoapellido, uuid } = req.body

    const pool = await getConnection()
    const result = await pool.request()
    .input('PRIMERNOMBRE', primernombre)
    .input('SEGUNDONOMBRE', segundonombre)
    .input('PRIMERAPELLIDO', primerapellido)
    .input('SEGUNDOAPELLIDO', segundoapellido)
    .input('UUID', uuid)
    .execute('UPDATE_EMPLEADO')
    
    const data = {
      message: 'Sea actualizado correctamente',
      status: true,
      rowsAffected: result.rowsAffected
  }
  
  res.json(data);

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

const deleteEmpledo = async (req, res, next) => {
  try {
    const { uuid } = req.body

    const pool = await getConnection()
    const result = await pool.request()
    .input('UUID', uuid)
    .execute('DELETE_EMPLEADO')
    
    const data = {
      message: 'Sea eliminado correctamente',
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
    getEmpleados,
    postEmpledo,
    updateEmpledo,
    deleteEmpledo
}