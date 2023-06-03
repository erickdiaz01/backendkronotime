const { Schema, model } = require("mongoose");

const DetalleProductoSchema = Schema(
  {
    productos:[{
        producto:{
            type: Schema.Types.ObjectId,
            ref:"Producto",
            required:true
        }
        ,
        cantidad: {
            type: Number,
            required:true
        }
    }],
   
  },
  {
    collection: "detalle_productos_pedido",
  }
);

module.exports = model("DetalleProducto", DetalleProductoSchema);
