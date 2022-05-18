const User = require("./model");

module.exports = {
  viewUser: async (req, res) => {
    try {
      let user = await User.find();
      res.status(200).json({
        status: "success",
        message: "Data has been obtained",
        data: user,
      });
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: err.message || `Internal server error`,
        data: null,
      });
    }
  },
  viewUserDetail: async (req, res) => {
    try {
      const { id } = req.params;
      let user = await User.findOne({ _id: id });
      res.status(200).json({
        status: "success",
        message: "Data has been obtained",
        data: user,
      });
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: err.message || `Internal server error`,
        data: null,
      });
    }
  },
  actionCreateUser: async (req, res) => {
    try {
      const payload = req.body;
      let user = await User({ ...payload });
      await user.save();

      res.status(200).json({
        status: "success",
        message: "Data has been obtained",
        data: user,
      });
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: err.message || `Internal server error`,
        data: null,
      });
    }
  },
  actionUpdateUser: async (req, res) => {
    try {
      const payload = req.body;
      const { id } = req.params;

      let user = await User.findOneAndUpdate({ _id: id }, { ...payload });
      user = await User.find();

      res.status(201).json({
        status: "success",
        message: "Data has been update",
        data: user,
      });
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: err.message || `Internal server error`,
        data: null,
      });
    }
  },
  actionDeleteUser: async (req, res) => {
    try {
      const { id } = req.params;

      let user = await User.findOneAndDelete({ _id: id });

      res.status(201).json({
        status: "success",
        message: "Data has been delete",
        data: user,
      });
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: err.message || `Internal server error`,
        data: null,
      });
    }
  },
};
