const express = require('express');
const router = express.Router();
const { query, validationResult } = require('express-validator')

const Anuncios = require('../../models/Anuncios')

var app = express();

router.get('/', async (req, res, next) => {
  try {

    // filtros
    const name = req.query.name;
    const tags = req.query.tags;
    const precio = req.query.precio;

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
    
    app.locals.anuncios = anuncios;

    res.json({ results: anuncios });

  } catch (err) {
    next(err);
  }
});
module.exports = router;
module.exports = app;