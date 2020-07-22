const pool = require('./../utils/bd');

//1. Trae todos los productos con los campos : (id, nombre, descripcion, imagen, precio, id_categoria)

getProducts = async () => {
//manejo de errores
   try {
    //dentro de try se hacen las consultas
    const query = "SELECT producto.id, producto.nombre, producto.descripcion,producto.precio,producto.imagen,categoria_principal.nombre as nombre_categoria  FROM producto JOIN categoria_principal ON producto.id_categoria = categoria_principal.id where estado = 1 order by id desc";
    const rows = await pool.query(query, [
      process.env.TABLA_PRODUCTO,
      process.env.TABLA_CATEGORIAS,
      ]);
    return rows;

   } catch (error) {
    console.log(error);
      }
};

//2. traigo producto individual  filtrando (where) por id

getProduct = async (id) => {
  try {
    const query = "SELECT id, nombre, descripcion, precio, imagen FROM ?? where id = ?";
    const params = [process.env.TABLA_PRODUCTO,id];
    const rows = await pool.query(query,params);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
};

const update = async (id,obj) => {
   const query = "UPDATE ?? SET ? where id = ?";
    const params = [process.env.TABLA_PRODUCTO,obj,id];
    return await pool.query(query,params);
};

const create = async (obj) => {
  const query = "INSERT INTO ?? SET ?";
  const params = [process.env.TABLA_PRODUCTO,obj];
  const rows = await pool.query(query, params);
  return rows.insertId;
};

module.exports = {
    getProducts,
    getProduct,
    create,
    update,
}