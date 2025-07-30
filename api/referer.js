export default function handler(req, res) {
  const referer = req.headers.referer || 'No referer sent';
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <h1>Visitor came from:</h1>
    <p>${referer}</p>
  `);
}
