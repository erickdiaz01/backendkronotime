const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  crearProducto,
  getProductos,
  editarProducto,
  eliminarProducto,
  getProducto,
} = require("../controllers/productoController");

router.post(
  "/crear",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("categoria", "La categoria es obligatoria").not().isEmpty(),
    check("costo", "El costo es obligatorio").isInt(),
    check("descripcion", "La descripcion del producto es obligatoria")
      .not()
      .isEmpty(),
    validarCampos,
  ],
  crearProducto
);

router.put(
  "/modificar/:id",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("categoria", "La categoria es obligatoria").not().isEmpty(),
    check("costo", "El costo es obligatorio").isInt(),
    check("descripcion", "La descripcion del producto es obligatoria")
      .not()
      .isEmpty(),
    validarCampos,
  ],
  editarProducto
);

router.get("/verproductos", getProductos);

router.get("/verproductos/:id", getProducto);

router.delete("/eliminar/:id", eliminarProducto);

module.exports = router;
