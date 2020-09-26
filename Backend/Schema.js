var mongoose = require("mongoose");
var userSchema = mongoose.Schema(
  {
    Username: { type: String },
    Password: { type: String },
    Email: { type: String },
    FirstName: { type: String },
    LastName: { type: String },
  },
  { versionKey: false }
);

module.exports = mongoose.model("SignUpData", userSchema);
