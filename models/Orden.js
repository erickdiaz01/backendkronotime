const { Schema, model } = require("mongoose");

const OrdenSchema = Schema(
  {
   

    pago: {
        type: Schema.Types.ObjectId,
        ref: "Pago",
        required:true
    },
    detalleProductos: {
        type: Schema.Types.ObjectId,
        ref:"DetalleProducto",
        required:true
    },
    fechaOrden:{
        type: Date,
        default: Date.now
    },
    direccion:{
        type:String,
        required:true
    },
    valorTotal:{
        type:Number,
        required:true
    }
  },
  {
    collection: "ordenes",
  }
);

module.exports = model("Orden", OrdenSchema);
