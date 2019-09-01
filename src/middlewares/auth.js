module.exports = function (req, res, next) {
  if (!req.session.userId){

    return res.status(401).send({ message:'Access denied.'});
  }
  next();
}