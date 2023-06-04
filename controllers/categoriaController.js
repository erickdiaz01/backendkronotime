const { response } = require("express");

const Categoria = require("../models/Categoria");

const crearCategoria = async (req, res = response) => {
  try {
    const { nombre } = req.body;
    nuevaCategoria = new Categoria(req.body);
    await nuevaCategoria.save();

    res.status(201).json({
      ok: true,
      message: "Categoria creada",
      nombre,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al crear la categoria",
    });
  }
};
const getCategorias = async (req, res = response) => {
  try {
    const categorias = await Categoria.find();

    res.status(200).json({
      ok: true,
      message: "Lista de categorias",
      categorias,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al buscar las categorias",
    });
  }
};

const getCategoria = async (req, res = response) => {
  try {
    const categoria = await Categoria.findById(req.params.id);
    res.status(200).json({
      ok: true,
      message: "Categoria encontrada",
      categoria,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al buscar la categoria",
    });
  }
};

const editarCategoria = async (req, res = response) => {
  try {
    const { nombre } = req.body;
    let categoriaActualizada = await Categoria.findOneAndUpdate(
      { categoriaId: req.params.id },
      { nombre }
    );
    if (!categoriaActualizada) {
      return res.status(400).json({
        ok: false,
        message: "No existe la categoria a actualizar",
      });
    }
    res.status(200).json({
      ok: true,
      message: "Categoria actualizada con exito",
      categoriaActualizada,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al actualizar la categoria",
    });
  }
};

const eliminarCategoria = async (req, res = response) => {
  try {
    let categoria = await Categoria.findById(req.params.id);
    if (!categoria) {
      return res.status(400).json({
        ok: false,
        message: "No existe la categoria a eliminar",
      });
    }
    categoria.delete();
    res.status(200).json({
      ok: true,
      message: "Categoria eliminada",
      categoria,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al eliminar la categoria",
    });
  }
};

module.exports = {
  crearCategoria,
  getCategorias,
  getCategoria,
  editarCategoria,
  eliminarCategoria,
};
