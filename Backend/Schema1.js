var mongoose = require("mongoose");

var date = new Date();
var hr = date.getHours() >= 12 ? date.getHours() - 12 : date.getHours();
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const d = new Date();
var mon = monthNames[d.getMonth()];
var ampm = date.getHours() >= 12 ? "pm" : "am";
var userSchema = mongoose.Schema({
  caption: { type: String },
  category: { type: String },
  username: { type: String },
  date: {
    type: String,
    default: date.getDate() + " " + mon + " " + date.getFullYear(),
  },
  time: {
    type: String,
    default: hr + ":" + date.getMinutes() + ampm,
  },
  imageupload: { type: String },

  versionKey: false,
});
module.exports = mongoose.model("uploaddata", userSchema);
