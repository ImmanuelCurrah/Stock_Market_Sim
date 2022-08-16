let stockValueOne = 300;
let stockValueTwo = 300;
let stockValueThree = 300;
let stockValueFour = 300;
let stockValueFive = 300;
let stockValueSix = 300;
let stockValueSeven = 300;
let stockValueEight = 300;
let stockValueNine = 300;
let stockValueTen = 300;

export default function flucuateStock() {
  let randomIdentifier = Math.floor(Math.random() * 10);
  if (randomIdentifier === 0) {
    stockValueOne += 100;
  } else if (randomIdentifier === 1) {
    stockValueOne -= 100;
    stockValueTwo += 100;
  } else if (randomIdentifier === 2) {
    stockValueThree += 100;
    stockValueTwo -= 100;
  } else if (randomIdentifier === 3) {
    stockValueFour += 100;
    stockValueThree -= 100;
  } else if (randomIdentifier === 4) {
    stockValueFive += 100;
    stockValueFour -= 100;
  } else if (randomIdentifier === 5) {
    stockValueSix += 100;
    stockValueFive -= 100;
  } else if (randomIdentifier === 6) {
    stockValueSeven += 100;
    stockValueSix -= 100;
  } else if (randomIdentifier === 7) {
    stockValueEight += 100;
    stockValueSeven -= 100;
  } else if (randomIdentifier === 8) {
    stockValueNine += 100;
    stockValueEight -= 100;
  } else if (randomIdentifier === 9) {
    stockValueTen += 100;
    stockValueNine -= 100;
  }
  return {
    stocks: {
      firstStock: stockValueOne,
      secondStock: stockValueTwo,
      thirdStock: stockValueThree,
      fourthStock: stockValueFour,
      fifthStock: stockValueFive,
      sixthStock: stockValueSix,
      seventhStock: stockValueSeven,
      eighthStock: stockValueFive,
      ninthStock: stockValueNine,
      tenthStock: stockValueTen,
    },
  };
}
