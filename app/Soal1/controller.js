module.exports = {
  viewProduct: async (req, res) => {
    try {
      const produk = [
        {
          id_produk: 1,
          nama_produk: "Huawei P30 Pro",
        },
        {
          id_produk: 2,
          nama_produk: "Huawei Nova 5T",
        },
      ];

      const stock_produk = [
        {
          id_produk: 1,
          qty: 15,
        },
        {
          id_produk: 1,
          qty: 6,
        },
        {
          id_produk: 2,
          qty: 4,
        },
        {
          id_produk: 2,
          qty: 18,
        },
      ];

      let product = produk.map((prod) => {
        prod.total_stock = 0;
        stock_produk.map((stok) => {
          if (prod.id_produk === stok.id_produk) {
            prod.total_stock += stok.qty;
          }
        });
        let data = {
          nama_produk: prod.nama_produk,
          total_produk: prod.total_stock,
        };
        return data;
      });

      res.status(200).json({
        status: "success",
        message: "Data has been obtained",
        data: product,
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
