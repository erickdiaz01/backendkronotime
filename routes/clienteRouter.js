const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  crearCliente,
  getClientes,
  getCliente,
  editarCliente,
  eliminarCliente,
} = require("../controllers/clienteController");

router.post(
  "/crear",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("correo", "El correo es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  crearCliente
);

router.put(
  "/modificar/:id",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("correo", "El correo es obligatorio").not().isEmpty(),

    validarCampos,
  ],
  editarCliente
);

router.get("/verclientes", getClientes);

router.get("/verclientes/:id", getCliente);

router.delete("/eliminar/:id", eliminarCliente);

module.exports = router;
