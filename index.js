const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", (req, res) => {

  return res.status(200).json({
    message: `Hello from root! ${req.query.name}`,
  });
});

app.get("/path", (req, res) => {
  return res.status(200).json({
    message: "Hello from path! --path",
  });
});

module.exports.handler = serverless(app);
