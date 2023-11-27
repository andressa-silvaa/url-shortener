const { generateCode } = require('../utils/linkFunction');
const knex = require('../connection/connection'); 

exports.getStats = async (req, res) => {
  const code = req.params.code;
  const resultado = await knex('link').where({ code }).first(); 
  if (!resultado) return res.sendStatus(404);
  res.render('stats', resultado);
};

exports.redirect = async (req, res) => {
  const code = req.params.code;
  const resultado = await knex('link').where({ code }).first(); 
  if (!resultado) return res.sendStatus(404);

  resultado.hits++;
  await knex('link').where({ code }).update('hits', resultado.hits); 

  res.redirect(resultado.url);
};

exports.getIndex = (req, res) => {
  res.render('index', { title: 'Encurtador' });
};

exports.createNewLink = async (req, res) => {
  const url = req.body.url;
  const code = generateCode();

  const [resultado] = await knex('link').insert({
    url,
    code,
    hits: 0,
  }).returning('*');

  
  res.render('stats', resultado);
};
