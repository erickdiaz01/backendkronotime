const { Schema, model } = require("mongoose");

const PagoSchema = Schema(
  {
    modoPago: {
      type: Schema.Types.ObjectId,
      ref: "ModoDePago",
      required: true,
    },
    fecha: {
      type: Date,
      default: Date.now
    },
    aprobado: {
      type: Boolean,
      required: true,
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
