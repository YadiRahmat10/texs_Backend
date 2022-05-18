const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  nama: {
    type: String,
  },
  hobi: {
    type: String,
  },
  alamat: {
    type: String,
  },
  nomor_telp: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
