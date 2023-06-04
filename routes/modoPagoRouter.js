const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  crearModoDePago,
  getModosDePago,
  getModoDePago,
  editarModoDePago,
  eliminarModoDePago,
} = require("../controllers/modoPagoController");

router.post(
  "/crear",
  [
    check("tipo", "El tipo de pago es obligatorio").not().isEmpty(),

    validarCampos,
  ],
  crearModoDePago
);

router.put(
  "/modificar/:id",
  [
    check("tipo", "El tipo de pago es obligatorio").not().isEmpty(),

    validarCampos,
  ],
  editarModoDePago
);

router.get("/vermodosdepago", getModosDePago);

router.get("/vermodosdepago/:id", getModoDePago);

router.delete("/eliminar/:id", eliminarModoDePago);

module.exports = router;
