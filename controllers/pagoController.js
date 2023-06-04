const { response } = require("express");

const Pago = require("../models/Pago");

const crearPago = async (req, res = response) => {
  try {
    const { modoPago, valor } = req.body;
    let nuevoPago = new Pago(req.body);
    await nuevoPago.save();

    res.status(201).json({
      ok: true,
      message: "Pago creado",
      modoPago,
      valor,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al crear el Pago",
    });
  }
};
const getPagos = async (req, res = response) => {
  try {
    const pagos = await Pago.find().populate("modoPago");

    res.status(200).json({
      ok: true,
      message: "Lista de pagos",
      pagos,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al buscar los  pagos",
    });
  }
};

const getPago = async (req, res = response) => {
  try {
    const pago = await Pago.findById(req.params.id).populate("modoPago");
    res.status(200).json({
      ok: true,
      message: "Pago encontrado",
      pago,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al buscar el Pago",
    });
  }
};

const editarPago = async (req, res = response) => {
  try {
    const { valor, aprobado, modoPago } = req.body;
    let pagoActualizado = await Pago.findOneAndUpdate(
      { pagoId: req.params.id },
      { valor, aprobado, modoPago }
    );
    if (!pagoActualizado) {
      return res.status(400).json({
        ok: false,
        message: "No existe el Pago a actualizar",
      });
    }
    res.status(200).json({
      ok: true,
      message: "Pago actualizado con exito",
      pagoActualizado,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al actualizar el Pago",
    });
  }
};

const eliminarPago = async (req, res = response) => {
  try {
    let pago = await Pago.findById(req.params.id);
    if (!pago) {
      return res.status(400).json({
        ok: false,
        message: "No existe el Pago a eliminar",
      });
    }
    pago.delete();
    res.status(200).json({
      ok: true,
      message: "Pago eliminado",
      pago,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al eliminar el Pago",
    });
  }
};

module.exports = {
  crearPago,
  getPagos,
  getPago,
  editarPago,
  eliminarPago,
};
