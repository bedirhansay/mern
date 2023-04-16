const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true, // sağdan soldan boşlukları alacak
  },
  email: {
    type: String,
    required: true,
    unique: true, // Kişiye özel olacak
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    trim: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("auth", AuthSchema);
