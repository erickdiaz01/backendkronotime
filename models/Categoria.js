const { Schema, model } = require("mongoose");

const CategoriaSchema = Schema(
  {
    categoriaId: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    nombre: {
      type: String,
      required: true,
    },
  },
  {
    collection: "categorias",
  }
);

module.exports = model("Categoria", CategoriaSchema);
