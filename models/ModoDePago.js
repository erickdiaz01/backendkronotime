const { Schema, model } = require("mongoose");

const ModoDePagoSchema = Schema(
  {
    modoPagoId: {
        type: Schema.Types.ObjectId,
        auto: true,
      },
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
