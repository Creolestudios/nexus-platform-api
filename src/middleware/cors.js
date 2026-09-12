module.exports = function tenantCors(req, res, next) {
  const origin = req.headers.origin;
  if (origin && (origin.endsWith('.creolestudios.com') || origin.endsWith('.nexustech.io'))) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,X-Tenant-ID');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  }
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
};
