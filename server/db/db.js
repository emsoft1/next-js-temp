process.env.ENV_VARIABLE;
const Pool = require("pg").Pool;
const pool = new Pool({
    user: env.pg.user,
    host: env.pg.host,
    database: env.pg.db,
    password: env.pg.pass,
    port: env.pg.port,
});

module.exports.checkDb = () => {
    // just check the DB if we have connection
    return pool.query(
        `
     SELECT * FROM businesses WHERE id =1 ; `
    );
};
module.exports.cat_list = () => {
    // just check the DB if we have connection
    return pool.query(
        `
     SELECT * FROM category  ; `
    );
};
module.exports.cat_item_id = (cat_id) => {
    // just check the DB if we have connection
    return pool.query(
        `
     SELECT * FROM businesses WHERE cat_id = $1  ; `,
        [cat_id]
    );
};
module.exports.buss_item = (buss_id) => {
    // just check the DB if we have connection
    return pool.query(
        `
     SELECT * FROM businesses WHERE id = $1  ; `,
        [buss_id]
    );
};
module.exports.coupon_list = (buss_id) => {
    // just check the DB if we have connection
    return pool.query(
        `
     SELECT * FROM coupon WHERE id < 100  ; `
    );
};
module.exports.coupon_list_new = (buss_id) => {
    // just check the DB if we have connection
    return pool.query(
        `
     SELECT * FROM coupon  
     INNER JOIN businesses ON coupon.company_id=businesses.business_id
     WHERE coupon.coupon_id < 20 ; `
    );
};

module.exports.coupon_item = (coupon_id) => {
    // just check the DB if we have connection
    return pool.query(
        `
     SELECT * FROM coupon  
     INNER JOIN businesses ON coupon.company_id=businesses.business_id
     WHERE coupon.coupon_id = $1 ; `,
        [coupon_id]
    );
};

module.exports.post_list = () => {
    // just check the DB if we have connection
    return pool.query(
        `
    SELECT * FROM sako_post 
    
     INNER JOIN sako_user ON sako_post.user_id_num=sako_user.user_id_num
    WHERE sako_post.post_id < 20 ; `
    );
};

module.exports.user_item = (coupon_id) => {
    // just check the DB if we have connection
    return pool.query(
        `
  SELECT * FROM sako_user 
    LEFT  JOIN businesses ON sako_user.business_id=businesses.business_id
    WHERE sako_user.user_id_num = $1
    
           ;
      
       `,
        [coupon_id]
    );
};

// module.exports = {
//     getUsers,
//     getUserById,
//     createUser,
//     updateUser,
//     deleteUser,
// };
