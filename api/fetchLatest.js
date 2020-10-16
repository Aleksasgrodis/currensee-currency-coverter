module.exports = (req, res) => {
  const { title } = JSON.parse(req.body)
  res.json({
    body: title
  })
}