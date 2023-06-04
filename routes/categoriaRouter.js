const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  crearCategoria,
  getCategorias,
  getCategoria,
  editarCategoria,
  eliminarCategoria,
} = require("../controllers/categoriaController");

router.post(
  "/crear",
  [check("nombre", "El nombre es obligatorio").not().isEmpty(), validarCampos],
  crearCategoria
);

router.put(
  "/modificar/:id",
  [check("nombre", "El nombre es obligatorio").not().isEmpty(), validarCampos],
  editarCategoria
);

router.get("/vercategorias", getCategorias);

router.get("/vercategorias/:id", getCategoria);

router.delete("/eliminar/:id", eliminarCategoria);

module.exports = router;
