const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  crearDetalleProducto,
  getDetallesProducto,
  getDetalleProducto,
  editarDetalleProducto,
  eliminarDetalleProducto,
} = require("../controllers/detalleProductoController");

router.post(
  "/crear",
  [
    check("productos", "Los productos son obligatorios").not().isEmpty(),

    validarCampos,
  ],
  crearDetalleProducto
);

router.put(
  "/modificar/:id",
  [
    check("productos", "Los productos son obligatorios").not().isEmpty(),

    validarCampos,
  ],
  editarDetalleProducto
);

router.get("/verdetallesproductos", getDetallesProducto);

router.get("/verdetallesproductos/:id", getDetalleProducto);

router.delete("/eliminar/:id", eliminarDetalleProducto);

module.exports = router;
