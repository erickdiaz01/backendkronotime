const { response } = require("express");

const Orden = require("../models/Orden");

const crearOrden = async (req, res = response) => {
  try {
    const { pago, detalleProductos, direccion, valorTotal } = req.body;
    nuevaOrden = new Orden(req.body);
    await nuevaOrden.save();

    res.status(201).json({
      ok: true,
      message: "Orden creada",
      pago,
      detalleProductos,
      direccion,
      valorTotal,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al crear la Orden",
    });
  }
};
const getOrdenes = async (req, res = response) => {
  try {
    const ordenes = await Orden.find()
      .populate("pago")
      .populate("detalleProductos");

    res.status(200).json({
      ok: true,
      message: "Lista de Ordenes",
      ordenes,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al buscar las Ordenes",
    });
  }
};

const getOrden = async (req, res = response) => {
  try {
    const orden = await Orden.findById(req.params.id)
      .populate("pago")
      .populate("detalleProductos");
    res.status(200).json({
      ok: true,
      message: "Orden encontrada",
      orden,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al buscar la Orden",
    });
  }
};

const editarOrden = async (req, res = response) => {
  try {
    const { pago, detalleProductos, direccion, valorTotal } = req.body;
    let ordenActualizada = await Orden.findOneAndUpdate(
      { _id: req.params.id },
      { pago, detalleProductos, direccion, valorTotal }
    );
    if (!ordenActualizada) {
      return res.status(400).json({
        ok: false,
        message: "No existe la Orden a actualizar",
      });
    }
    res.status(200).json({
      ok: true,
      message: "Orden actualizada con exito",
      ordenActualizada,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al actualizar la Orden",
    });
  }
};

const eliminarOrden = async (req, res = response) => {
  try {
    let orden = await Orden.findById(req.params.id);
    if (!orden) {
      return res.status(400).json({
        ok: false,
        message: "No existe la Orden a eliminar",
      });
    }
    orden.delete();
    res.status(200).json({
      ok: true,
      message: "Orden eliminada",
      orden,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al eliminar la orden",
    });
  }
};

module.exports = {
  crearOrden,
  getOrdenes,
  getOrden,
  editarOrden,
  eliminarOrden,
};
