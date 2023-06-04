const { response } = require("express");

const DetalleProducto = require("../models/DetalleProducto");

const crearDetalleProducto = async (req, res = response) => {
  try {
    const { productos } = req.body;
    let nuevoDetalleProducto = new DetalleProducto(req.body);
    await nuevoDetalleProducto.save();

    res.status(201).json({
      ok: true,
      message: "Categoria creada",
      productos,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al crear el detalle de productos",
    });
  }
};
const getDetallesProducto = async (req, res = response) => {
  try {
    const detallesProducto = await DetalleProducto.find().populate(
      "productos.producto"
    );

    res.status(200).json({
      ok: true,
      message: "Lista de detalles de productos",
      detallesProducto,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al buscar los detalles de productos",
    });
  }
};

const getDetalleProducto = async (req, res = response) => {
  try {
    const detalleProducto = await DetalleProducto.findById(
      req.params.id
    ).populate("productos.producto");
    res.status(200).json({
      ok: true,
      message: "Detalle producto encontrada",
      detalleProducto,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al buscar el detalle de productos",
    });
  }
};

const editarDetalleProducto = async (req, res = response) => {
  try {
    const { productos } = req.body;
    let detalleActualizado = await DetalleProducto.findOneAndUpdate(
      { detalleProductoId: req.params.id },
      { productos }
    );
    if (!detalleActualizado) {
      return res.status(400).json({
        ok: false,
        message: "No existe el detalle a actualizar",
      });
    }
    res.status(200).json({
      ok: true,
      message: "Detalle de productos actualizado con exito",
      detalleActualizado,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al actualizar el detalle de productos",
    });
  }
};

const eliminarDetalleProducto = async (req, res = response) => {
  try {
    let detalleProducto = await DetalleProducto.findById(req.params.id);
    if (!detalleProducto) {
      return res.status(400).json({
        ok: false,
        message: "No existe el detalle de producto a eliminar",
      });
    }
    detalleProducto.delete();
    res.status(200).json({
      ok: true,
      message: "Detalle de producto eliminado",
      detalleProducto,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al eliminar el detalle de productos",
    });
  }
};

module.exports = {
  crearDetalleProducto,
  getDetallesProducto,
  getDetalleProducto,
  editarDetalleProducto,
  eliminarDetalleProducto,
};
