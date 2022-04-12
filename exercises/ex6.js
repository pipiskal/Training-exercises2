const cars = [
  {
    brand: "Audi",
    year: 1999,
    price: 12222,
  },
  {
    brand: "Nissan",
    year: 2003,
    price: 24222,
  },
];

// {Audi: {year: 1999...}, Nissan: {...}}.

const newCars = cars.filter((car) => car.year > 2000);
console.log("newCars", newCars);

const transform = (cars, idProp) => {
  return cars.reduce((acc, cur) => {
    return { ...acc, [cur[idProp]]: { year: cur.year, price: cur.price } };
  }, {});
};

const transformedCars = transform(cars, "brand");

console.log("transformedCars", transformedCars);

// evdokia's  solution

// const transform = (cars, idProp) =>
//   cars.reduce(
//     (acc, cur) => ({
//       ...acc,
//       [cur[idProp]]: Object.fromEntries(
//         Object.entries(cur).filter(([key, val]) => key !== idProp)
//       )
//     }),
//     {}
//   );

// const transformedCars = transform(cars, "brand");

// console.log("transformedCars", transformedCars);
