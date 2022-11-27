const initOptions = {};
const pgq = require("pg-promise")(initOptions);

const connection = {
    host: 'localhost',
    port: 5432,
    database: 'recipebook',
    user: 'postgres',
    password: '5437',
    max: 40
};

const db = pgq(connection);

const productModel = {
    getAll: async() => {
        const rs = await db.any('SELECT * FROM "product"');
        return rs;
    },
    addProduct: async(product) => {
        const rs = await db.one('INSERT INTO "product"(id, image_path, title, description, price, made) VALUES($1, $2, $3, $4, $5, $6) RETURNING *', [product.id, product.image_path, product.title, product.description, product.price, product.made])
        return rs;
    },
    getProductById: async(id) => {
        const rs = await db.one('SELECT * FROM "product" WHERE id = $1', [id]);
        return rs;
    },
    updateProduct: async(product) => {
        const rs = await db.one('UPDATE "product" SET image_path = $2, title = $3, description = $4, price =$5, made = $6 WHERE id = $1 RETURNING *',  [product.id, product.image_path, product.title, product.description, product.price, product.made])
        return rs;
    },
    deleteProduct: async(id) => {
        const rs = await db.none('DELETE FROM "product" WHERE id = $1', [id]);
        return rs;
    }
};

module.exports = productModel;