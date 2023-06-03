const { Schema, model } = require("mongoose");

const ClienteSchema = Schema(
  {
    clienteId:{
        type: String,
        required:true,
        unique: true
    },

    nombre: {
      type: String,
      required: true,
    },
    correo: {
      type: String,
      required: true,
    },
  },
  {
    collection: "clientes",
  }
);

module.exports = model("Cliente", ClienteSchema);
