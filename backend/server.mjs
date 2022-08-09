import express from "express";
import flucuateStock from "./stocks.mjs";

const app = express();

app.get("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send(flucuateStock());
});

app.listen(3001, () => {
  console.log("Listing to port 3000 boi");
});
