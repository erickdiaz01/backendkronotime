const { Schema, model } = require("mongoose");

const TiendaSchema = Schema(
  {
    tiendaId: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    productos: [{ producto: { type: Schema.Types.ObjectId, ref: "Producto" } }],
  },
  {
    collection: "tiendas",
  }
);

module.exports = model("Tienda", TiendaSchema);
