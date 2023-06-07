const express = require("express");
const cors = require("cors");
const app = express();

const { dbConnection } = require("./database");
//settings
app.set("port", process.env.PORT || 4000);

//Levantar la conexion a la DB
dbConnection();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/tienda", require("./routes/tiendaRouter"));

app.use("/api/producto", require("./routes/productoRouter"));

app.use("/api/categoriaproducto", require("./routes/categoriaRouter"));

app.use("/api/cliente", require("./routes/clienteRouter"));

app.use("/api/pago", require("./routes/pagoRouter"));

app.use("/api/mododepago", require("./routes/modoPagoRouter"));

app.use("/api/detalleproducto", require("./routes/detalleProductoRouter"));

app.use("/api/orden", require("./routes/ordenRouter"));

app.get("*", (req, res) => {
  res.send("404 | Page not found");
});

module.exports = app;
