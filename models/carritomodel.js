const pool = require('./../utils/bd');

getCarrito = async() =>{
    try{
        const query = "SELECT * FROM ??";
        const params = [process.env.TABLA_CARRITO];
        const rows = await pool.query(query, params);
        return rows;
    } catch (error){
        console.log(error)
    }
};

agregarItem = async (obj) => {
    //manejo de errores
       try {
        //dentro de try se hacen las consultas
        const query = "INSERT INTO ?? SET ?";
        const params = [process.env.TABLA_CARRITO, obj];
          return await pool.query(query,params);
        
        }catch (error) {
        console.log(error);
          }
    };

eliminarItem = async (id)=> {
    const query = "DELETE FROM ?? where id = ?";
    const params = [process.env.TABLA_CARRITO, id];
    return await pool.query(query, params);
};

module.exports = {

getCarrito,
agregarItem,
eliminarItem,

}