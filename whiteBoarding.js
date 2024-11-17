const sodas = [
  {
    name: "Pepsi",
    sugarFree: false,
    energy: false,
    image: "fake.cdn/pepsi.jpg"
  },
  {
    name: "Coke",
    sugarFree: false,
    energy: false,
    image: "fake.cdn/coke.jpg"
  },
  {
    name: "NOS",
    sugarFree: false,
    energy: true,
    image: "fake.cdn/nos.jpg"
  },
  {
    name: "Diet Pepsi",
    sugarFree: true,
    energy: false,
    image: "fake.cdn/diet_pepsi.jpg"
  }
];

// let attributeList = ["name", "image"];
// let sodaName = [sodas[0][attributeList[0]], sodas[0][attributeList[1]]];

// console.log(sodaName[0], sodaName[1]);

// sodas.map(soda =>
//   console.log(
//     ` ${attributeList[0]}: ${sodaName[0]} ,  ${attributeList[1]}: ${sodaName[1]}`
//   )
// );

// function buySoda(x, y) {
//   let attributeList = ["name", "image"];
//   let sodaName = [sodas.x, sodas.y];

//   console.log(sodaName);
// }
// buySoda(attributeList);

let attributeList = ["name", "image"];

// sodas.map(soda => {
//   console.log(soda);
//   console.log(soda[attributeList[0]], soda[attributeList[1]]);
// });

sodas.map(soda => {
  attributeList.map(attrib => {
    console.log(attrib, soda[attrib]);
  });
});
