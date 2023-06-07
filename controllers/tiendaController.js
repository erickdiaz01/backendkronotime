const { response } = require("express");

const Tienda = require("../models/Tienda");

const crearTienda = async (req, res = response) => {
  try {
    const { nombre, direccion } = req.body;
    nuevaTienda = new Tienda(req.body);
    await nuevaTienda.save();

    res.status(201).json({
      ok: true,
      message: "Tienda creada",

      nombre,
      direccion,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al crear la tienda",
    });
  }
};
const getTiendas = async (req, res = response) => {
  try {
    const tiendas = await Tienda.find().populate("productos.producto");

    res.status(200).json({
      ok: true,
      message: "Lista de Tiendas",
      tiendas,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al buscar las tiendas",
    });
  }
};

const getTienda = async (req, res = response) => {
  try {
    const tienda = await Tienda.findById(req.params.id).populate(
      "productos.producto"
    );
    res.json(tienda);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al buscar la tienda",
    });
  }
};

const editarTienda = async (req, res = response) => {
  const { nombre, direccion } = req.body;
  let tiendaActualizada = await Tienda.findOneAndUpdate(
    { _id: req.params.id },
    { nombre, direccion }
  );
  if (!tiendaActualizada) {
    return res.status(400).json({
      ok: false,
      message: "No existe la tienda a actualizar",
    });
  }
  res.status(200).json({
    ok: true,
    message: "Tienda actualizada con exito",
    nombre,
    direccion,
  });
};

const eliminarTienda = async (req, res = response) => {
  let tienda = await Tienda.findById(req.params.id);
  if (!tienda) {
    return res.status(400).json({
      ok: false,
      message: "No existe la tienda a eliminar",
    });
  }
  tienda.delete();
  res.status(200).json({
    ok: true,
    message: "Tienda eliminada",
    tienda,
  });
};

module.exports = {
  crearTienda,
  getTiendas,
  getTienda,
  editarTienda,
  eliminarTienda,
};
