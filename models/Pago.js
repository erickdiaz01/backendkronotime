const { Schema, model } = require("mongoose");

const PagoSchema = Schema(
  {
    pagoId: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    modoPago: {
      type: Schema.Types.ObjectId,
      ref: "ModoDePago",
      required: true,
    },
    fecha: {
      type: Date,
      default: Date.now,
    },
    aprobado: {
      type: Boolean,
      default: true,
    },
    valor: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "pagos",
  }
);

module.exports = model("Pago", PagoSchema);
