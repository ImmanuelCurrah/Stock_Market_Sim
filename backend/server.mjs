import express from "express";

const app = express();

let stockValueOne = 300;
let stockValueTwo = 300;

const flucuateStock = () => {
  let randomIdentifier = Math.floor(Math.random() * 2);
  if (randomIdentifier === 0) {
    stockValueOne += 100;
    stockValueTwo -= 50;
  } else if (randomIdentifier === 1) {
    stockValueOne -= 100;
    stockValueTwo += 20;
  }
  return { stocks: { firstStock: stockValueOne, secondStock: stockValueTwo } };
};

app.get("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  flucuateStock();
  res.send(flucuateStock());
});

app.listen(3001, () => {
  console.log("Listing to port 3000 boi");
});
