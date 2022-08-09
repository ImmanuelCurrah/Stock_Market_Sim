let stockValueOne = 300;
let stockValueTwo = 300;

export default function flucuateStock() {
  let randomIdentifier = Math.floor(Math.random() * 2);
  if (randomIdentifier === 0) {
    stockValueOne += 100;
    stockValueTwo -= 50;
  } else if (randomIdentifier === 1) {
    stockValueOne -= 100;
    stockValueTwo += 20;
  }
  return { stocks: { firstStock: stockValueOne, secondStock: stockValueTwo } };
}
