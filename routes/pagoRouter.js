const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  crearPago,
  getPagos,
  getPago,
  editarPago,
  eliminarPago,
} = require("../controllers/pagoController");

router.post(
  "/crear",
  [
    check("modoPago", "El modo de pago es obligatorio").not().isEmpty(),
    check("valor", "El valor es obligatorio").isInt(),
    validarCampos,
  ],
  crearPago
);

router.put(
  "/modificar/:id",
  [
    check("modoPago", "El modo de pago es obligatorio").not().isEmpty(),
    check("valor", "El valor es obligatorio").isInt(),
    validarCampos,
  ],
  editarPago
);

router.get("/verpagos", getPagos);

router.get("/verpagos/:id", getPago);

router.delete("/eliminar/:id", eliminarPago);

module.exports = router;
