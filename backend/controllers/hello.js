async function hello(req, res) {
  return res.status(200).json({ message: 'Hello from Backend' });
}

module.exports = {
  hello,
};
