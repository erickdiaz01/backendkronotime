const { Schema, model } = require("mongoose");

const OrdenSchema = Schema(
  {
   
    ordenId: {
        type: Schema.Types.ObjectId,
        auto: true,
      }, cliente: {
      type: Schema.Types.ObjectId,
      ref: "Cliente",
      required: true,
    },
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
