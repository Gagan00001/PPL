//This is a test commennt

var express = require("express");
var app = express();
var mongoose = require("mongoose");
var db = require("./Schema");
var db1 = require("./Schema1");
var cors = require("cors");
var bodyParser = require("body-parser");
var multer = require("multer");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/PPL", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.static("uploads"));

app.use(cors());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

app.get("/FetchImage", function (req, res) {
  console.log("callllllll");
  db1.find({}, function (err, result) {
    if (err) {
      console.log(err);
      res.send("err");
    } else {
      res.send(result);
    }
  });
});

app.post("/uploadPost", upload.single("myfile"), function (req, res) {
  console.log("req.file", req.file);
  console.log("body-data", req.body);
  let data1 = req.body;
  // data1.Username = localStorage.getItem("user").Username;
  data1.imageupload = req.file.filename;

  db1.create(data1, function (err, result) {
    if (err) {
      console.log("err", err);
      res.send(err);
    } else {
      db1.find({}, function (err, result) {
        if (err) {
          console.log(err);
          res.send("err");
        } else {
          res.send(result);
        }
      });
    }
  });
  // res.send("Response Of Post Call");
});

app.post("/SignUp", (req, res) => {
  console.log("data-From Front-End", req.body);
  var username = req.body.Username;
  var mail = req.body.Email;
  var pass = req.body.Password;
  db.find({ Username: username }, function (err, result) {
    if (result.length > 0) {
      // console.log("Result",result);
      console.log("Username Already Taken");
      res.send({ a: "Username Exists", b: 1 });
    } else {
      db.find({ Email: mail }, function (err, result) {
        if (result.length > 0) {
          console.log("Result", result);
          console.log("Email Already Taken");
          res.send({ a: "Email Already Taken", b: 2 });
        } else {
          db.create(req.body, function (err, result) {
            if (err) {
              console.log("error", err);
              res.send(err);
            } else {
              res.send({ a: "Register Successfully", b: 3 });
            }
          });
        }
      });
    }
  });
});

app.post("/Login", (req, res) => {
  var mail = req.body.Email;
  var pass = req.body.Password;
  db.find({ Email: mail }, function (err, result) {
    if (result.length > 0) {
      if (result[0].Password != pass) {
        console.log("Wrong Password");
        res.send({ msg: "Wrong Password" });
      } else {
        console.log("Correct Password");
        res.send({
          _id: result[0]._id,
          Username: result[0].Username,
          FirstName: result[0].FirstName,
          LastName: result[0].LastName,
          Email: result[0].Email,
          msg: "Login Successful",
        });
      }
    } else {
      console.log("Email-Id Not Registered");
      res.send({ msg: "Email-Id Not Registered" });
    }
  });
});

app.listen(8081, () => {
  console.log("server is running");
});
