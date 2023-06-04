const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  crearTienda,
  getTiendas,
  getTienda,
  editarTienda,
  eliminarTienda,
} = require("../controllers/tiendaController");

router.post(
  "/crear",
  [
    check("nombre", "El nombre de la tienda es obligatorio").not().isEmpty(),
    check("direccion", "La direccion de la tienda es obligatoria")
      .not()
      .isEmpty(),
    check("productos", "Los productos de la tienda es obligatorio")
      .not()
      .isEmpty(),
    validarCampos,
  ],
  crearTienda
);

router.put(
  "/modificar/:id",
  [
    check("nombre", "El nombre de la tienda es obligatorio").not().isEmpty(),
    check("direccion", "La direccion de la tienda es obligatoria")
      .not()
      .isEmpty(),
    check("productos", "Los productos de la tienda es obligatorio")
      .not()
      .isEmpty(),
    validarCampos,
  ],
  editarTienda
);

router.get("/vertiendas", getTiendas);

router.get("/vertiendas/:id", getTienda);

router.delete("/eliminar/:id", eliminarTienda);

module.exports = router;
