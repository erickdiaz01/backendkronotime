const express = require("express");
const cors = require("cors");
const app = express();

const {dbConnection}=require("./database");
//settings
app.set("port", process.env.PORT || 4000);

//Levantar la conexion a la DB
dbConnection();

//middlewares
app.use(cors());
app.use(express.json());


//routes




app.get('*',(req,res)=>{
res.send('404 | Page not found')
})

module.exports = app;