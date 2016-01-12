
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};
exports.summary = function(req, res){
  res.render('summary');
};
exports.product = function(req, res){
  res.render('product');
};
exports.contact = function(req, res){
  res.render('contact');
};