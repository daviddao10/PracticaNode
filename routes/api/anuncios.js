const express = require('express');
const router = express.Router();
const { query, validationResult } = require('express-validator')
const Anuncios = require('../../models/Anuncios')


router.get('/', async (req, res, next) => {
  try {

    // filtros
    const name = req.query.name;
    const age = req.query.age;
    // paginación
    const skip = req.query.skip;
    const limit = req.query.limit;
    // selección de campos
    const fields = req.query.fields;
    const sort = req.query.sort;

       // creo el filtro vacio
    const filtro = {}

    if (name) {
      filtro.name = name;
    }

    if (age) {
      filtro.age = age;
    }

     const anuncios = await Anuncios.lista(filtro, skip, limit, fields, sort);

    res.json({ results: anuncios });

  } catch (err) {
    next(err);
  }
});
module.exports = router;