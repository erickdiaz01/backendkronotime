const { Schema, model } = require("mongoose");

const ProductoSchema = Schema(
  {
   
    categoria: {
      type: Schema.Types.ObjectId,
      ref: "Categoria",
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    costo: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "productos",
  }
);

module.exports = model("Producto", ProductoSchema);
