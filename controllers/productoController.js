const { response } = require("express");

const Producto = require("../models/Producto");

const crearProducto = async (req, res = response) => {
  try {
    const { categoria, nombre, descripcion, costo } = req.body;
    nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();

    res.status(201).json({
      ok: true,
      message: "Producto creada",

      categoria,
      nombre,
      descripcion,
      costo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al crear el producto",
    });
  }
};
const getProductos = async (req, res = response) => {
  try {
    const productos = await Producto.find().populate("categoria");

    res.status(200).json({
      ok: true,
      message: "Lista de productos",
      productos,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al buscar los productos",
    });
  }
};

const getProducto = async (req, res = response) => {
  try {
    const producto = await Tienda.findById(req.params.id).populate("categoria");
    res.status(200).json({
      ok: true,
      message: "Producto encontrado",
      producto,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al buscar el producto",
    });
  }
};

const editarProducto = async (req, res = response) => {
  try {
    const { categoria, nombre, descripcion, costo } = req.body;
    let productoActualizado = await Producto.findOneAndUpdate(
      { productoId: req.params.id },
      { categoria, nombre, descripcion, costo }
    );
    if (!productoActualizado) {
      return res.status(400).json({
        ok: false,
        message: "No existe el producto a actualizar",
      });
    }
    res.status(200).json({
      ok: true,
      message: "Producto actualizado con exito",
      categoria,
      nombre,
      descripcion,
      costo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al actualizar el producto",
    });
  }
};

const eliminarProducto = async (req, res = response) => {
  try {
    let producto = await Producto.findById(req.params.id);
    if (!producto) {
      return res.status(400).json({
        ok: false,
        message: "No existe el producto a eliminar",
      });
    }
    producto.delete();
    res.status(200).json({
      ok: true,
      message: "Tienda eliminada",
      tienda,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al eliminar el producto",
    });
  }
};

module.exports = {
  crearProducto,
  getProductos,
  getProducto,
  editarProducto,
  eliminarProducto,
};
