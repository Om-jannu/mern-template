module.exports = {
  get: (req, res) => {
    res.json({
      msg: "Hello message from server 😁",
      success: true,
    });
  },
};
