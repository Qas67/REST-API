// this file will handle the the databse connection and export various functanilities

const {Pool}= require('pg');

const pool= new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "",
    database: "postgres"
})

/*pool.connect();
pool.query("SELECT * FROM category",(err,res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    pool.end;
})*/
module.exports ={
    pool
}