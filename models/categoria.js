const pool = require('./../utils/bd');

getCategories = async () => {
    try {
        const query = "SELECT id,nombre,descripcion FROM categoria_principal";
         const rows = await pool.query(query);
        return rows;
    }  catch ( error ){
        console.log(error)
    }

}

module.exports = {
    getCategories,
}