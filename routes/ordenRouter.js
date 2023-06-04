const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  crearOrden,
  getOrdenes,
  getOrden,
  editarOrden,
  eliminarOrden,
} = require("../controllers/ordenController");

router.post(
  "/crear",
  [
    check("pago", "El pago es obligatorio").not().isEmpty(),
    check("detalleProductos", "El detalle de productos es obligatorio")
      .not()
      .isEmpty(),
    check("direccion", "La direccion es obligatoria").not().isEmpty(),
    check("valorTotal", "El valor total es obligatorio").isInt(),
    validarCampos,
  ],
  crearOrden
);

router.put(
  "/modificar/:id",
  [
    check("pago", "El pago es obligatorio").not().isEmpty(),
    check("detalleProductos", "El detalle de productos es obligatorio")
      .not()
      .isEmpty(),
    check("direccion", "La direccion es obligatoria").not().isEmpty(),
    check("valorTotal", "El valor total es obligatorio").isInt(),
    validarCampos,
  ],
  editarOrden
);

router.get("/verordenes", getOrdenes);

router.get("/verordenes/:id", getOrden);

router.delete("/eliminar/:id", eliminarOrden);

module.exports = router;
