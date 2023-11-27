module.exports.notFound = (req, res) => {
  res.render('error', { message: 'Mensagem de erro', error: { status: 404 } });

  };
  
  module.exports.otherErrors = (err, req, res) => {
  res.render('error', { message: 'Mensagem de erro', error: { status: err.status || 500} });

  };
  