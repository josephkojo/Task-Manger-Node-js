const errorHandeler = (err, req, res, next) =>{
  res.status(500).json({msg:err});

}
module.exports = errorHandeler;