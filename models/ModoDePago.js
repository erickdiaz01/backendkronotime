const { Schema, model } = require("mongoose");

const ModoDePagoSchema = Schema(
  {
   
    tipo: {
      type: String,
      required: true,
    },
   
  },
  {
    collection: "modos_de_pago",
  }
);

module.exports = model("ModoDePago", ModoDePagoSchema);
