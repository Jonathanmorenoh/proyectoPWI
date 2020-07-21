const pool = require('./../utils/bd');

//1. Trae todos los productos con los campos : (id, nombre, descripcion, imagen, precio, id_categoria)

getProducts = async () => {
//manejo de errores
   try {
    //dentro de try se hacen las consultas
    const query = "SELECT id,nombre,descripcion,precio,imagen FROM producto";
    const rows = await pool.query(query);
    return rows;

   } catch (error) {
    console.log(error);
      }
}

//2. traigo producto individual  filtrando (where) por id

getProduct = async (id) => {
  try {
    const query = "SELECT id, nombre, descripcion, precio, imagen FROM ?? where id = ?"
    const params = ["producto",id];
    const rows = await pool.query(query,params);
    return rows[0];
  } catch (error) {

  }
}
module.exports = {
    getProducts,
    getProduct
}