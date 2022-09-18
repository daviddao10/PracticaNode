var express = require('express');
var router = express.Router();
const Anuncios = require('../models/Anuncios')




/* GET home page. */
router.get('/', async (req, res, next)=> {
  try {

    // filtros
    const tags = req.query.tags;
    const venta = req.query.venta;
    const precio = req.query.precio
    const name = req.query.name
    // paginación
    const skip = req.query.skip;
    const limit = req.query.limit;
    // selección de campos
    const fields = req.query.fields;
    const sort = req.query.sort;

    // creo el filtro vacio
    const filtro = {}

    if (tags) {
      filtro.tags = tags;
    }
    if (venta) {
      filtro.venta= venta
    }
    if (precio) {
      filtro.precio = precio
      
    }
    if (name) {
      filtro.name = name;
    }

    const anuncios = await Anuncios.lista(filtro, skip, limit, fields, sort);

    //res.json({ results: anuncios });

    res.render('index', {
      title: 'Express',
  anuncios:anuncios  });

  } catch (err) {
    next(err);
  }

  
});

module.exports = router;
//http://localhost:3000/?start=1&limit=3&sort=name&tag=lifestyle'