module.exports = {
  viewPerson: async (req, res) => {
    try {
      const { id } = req.params;

      const arrayOfObject = [
        {
          nama: "Smith",
          nama_produk: "Self Service",
        },
        {
          nama: "Dio",
          nama_produk: "Design Grafis",
        },
        {
          nama: "Agung",
          nama_produk: "Bermain Game",
        },
      ];

      let person = arrayOfObject.filter((data, i) => id == i);

      res.status(200).json({
        status: "success",
        message: "Data has been obtained",
        data: person,
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
