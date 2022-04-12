const cars = [
  {
    brand: "audi",
    year: 2000,
  },
  {
    brand: "fiat",
    year: 2002,
  },
];

// const newCars4 = {
//     audi: 2000,
//     fiat: 2002
//   };

// we dont want to return the same ammount of items
// so map its not the use case here but reduce can do it

// a function that will return an object - using reduce
const newCars4 = (cars, idProp) => {
  return cars.reduce((acc, cur) => {
    return { ...acc, [cur[idProp]]: cur.year };
  }, {});
};

const carsTransformed = newCars4(cars, "brand");

console.log("carsTransformed", carsTransformed);
