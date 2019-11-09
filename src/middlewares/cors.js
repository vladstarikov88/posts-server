function cors(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader('Access-Control-Allow-Headers', 'origin, x-requested-with, content-type, accept');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
}

export { cors };
