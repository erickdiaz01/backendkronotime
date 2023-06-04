const { response } = require("express");

const Cliente = require("../models/Cliente");

const crearCliente = async (req, res = response) => {
  try {
    const { clienteId, nombre, correo } = req.body;
    nuevoCliente = new Cliente(req.body);
    await nuevCliente.save();

    res.status(201).json({
      ok: true,
      message: "Cliente creado",
      clienteId,
      nombre,
      correo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al crear el cliente",
    });
  }
};
const getClientes = async (req, res = response) => {
  try {
    const clientes = await Cliente.find();

    res.status(200).json({
      ok: true,
      message: "Lista de clientes",
      clientes,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al buscar los clientes",
    });
  }
};

const getCliente = async (req, res = response) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    res.status(200).json({
      ok: true,
      message: "Cliente encontrado",
      cliente,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al buscar el cliente",
    });
  }
};

const editarCliente = async (req, res = response) => {
  try {
    const {  nombre, correo } = req.body;
    let clienteActualizado = await Cliente.findOneAndUpdate(
      { clienteId: req.params.id },
      { nombre, correo }
    );
    if (!clienteActualizado) {
      return res.status(400).json({
        ok: false,
        message: "No existe el cliente a actualizar",
      });
    }
    res.status(200).json({
      ok: true,
      message: "Cliente actualizado con exito",
      clienteActualizado,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al actualizar el cliente",
    });
  }
};

const eliminarCliente = async (req, res = response) => {
  try {
    let cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return res.status(400).json({
        ok: false,
        message: "No existe el cliente a eliminar",
      });
    }
    cliente.delete();
    res.status(200).json({
      ok: true,
      message: "Cliente eliminada",
      cliente,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al eliminar el cliente",
    });
  }
};

module.exports = {
  crearCliente,
  getClientes,
  getCliente,
  editarCliente,
  eliminarCliente,
};
