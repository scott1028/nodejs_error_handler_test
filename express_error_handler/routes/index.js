
/*
 * GET home page.
 */

exports.index = function(req, res){
  
  // 不會讓 Server 死掉XD~
  // throw Error('test error');

  res.render('index', { title: 'Express' });
};