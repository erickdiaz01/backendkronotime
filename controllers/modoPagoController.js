const { response } = require("express");

const ModoDePago = require("../models/ModoDePago");

const crearModoDePago = async (req, res = response) => {
  try {
    const { tipo } = req.body;
    let nuevoModoDePago = new ModoDePago(req.body);
    await nuevoModoDePago.save();

    res.status(201).json({
      ok: true,
      message: "Modo de pago creado",
      tipo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al crear el modo de pago",
    });
  }
};
const getModosDePago = async (req, res = response) => {
  try {
    const modosDePago = await ModoDePago.find();

    res.status(200).json({
      ok: true,
      message: "Lista de modos de pago",
      modosDePago,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al buscar los modos de pago",
    });
  }
};

const getModoDePago = async (req, res = response) => {
  try {
    const modoDePago = await ModoDePago.findById(req.params.id);
    res.status(200).json({
      ok: true,
      message: "Modo de pago encontrado",
      modoDePago,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al buscar el modo de pago",
    });
  }
};

const editarModoDePago = async (req, res = response) => {
  try {
    const {  tipo } = req.body;
    let modoDePagoActualizado = await ModoDePago.findOneAndUpdate(
      { _id: req.params.id },
      { tipo }
    );
    if (!modoDePagoActualizado) {
      return res.status(400).json({
        ok: false,
        message: "No existe el modo de pago a actualizar",
      });
    }
    res.status(200).json({
      ok: true,
      message: "Modo de pago actualizado con exito",
      modoDePagoActualizado,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al actualizar el modo de pago",
    });
  }
};

const eliminarModoDePago = async (req, res = response) => {
  try {
    let modoDePago = await ModoDePago.findById(req.params.id);
    if (!modoDePago) {
      return res.status(400).json({
        ok: false,
        message: "No existe el modo de pago a eliminar",
      });
    }
    modoDePago.delete();
    res.status(200).json({
      ok: true,
      message: "Modo de pago eliminado",
      modoDePago,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al eliminar el modo de pago",
    });
  }
};

module.exports = {
  crearModoDePago,
  getModosDePago,
  getModoDePago,
  editarModoDePago,
  eliminarModoDePago,
};
