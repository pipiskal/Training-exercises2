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

// we need to use a dynamic key to be able to change the
// key depending on the value we pass
const newCars3 = cars.map((car) => {
  return { [car.brand]: car.year };
});

console.log("newCars3", newCars3);
