const pool = require('./../utils/bd');

logueado = async (usuario, pass) => {
    try {
        const query = "SELECT * FROM ?? WHERE usuario = ? AND password = ?";
        const params = [process.env.TABLA_USUARIO, usuario, pass];
        return await pool.query(query, params);
    } catch(error){
        console.log(error);
    }
};

getUsuarios = async ()=>{
    try{
        const query = "SELECT * FROM ??";
        const params = [process.env.TABLA_USUARIO];
        const rows = await pool.query(query, params);
        return rows;
    } catch(error){
        cosole.log(error);
    }
};

const deletebyID = async (id) => {
    const query = "DELETE FROM ?? where id = ?";
     const params = [process.env.TABLA_USUARIO,id];
     return await pool.query(query,params);
 };

 const modifyAdm = async (id)=>{
     const query = "UPDATE ?? SET usuario.admin = 1 WHERE id = ?";
     const params = [process.env.TABLA_USUARIO, id];
     return await pool.query(query, params);
 };

 const create = async (obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.TABLA_USUARIO, obj];
    const rows = await pool.query(query, params);
    return rows.insertId;
  };

module.exports = {
    getUsuarios,
    logueado,
    deletebyID,
    modifyAdm,
    create,
}