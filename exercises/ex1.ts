type Car = {
  brand: string;
  year: number;
  // optional properties assigned with ? after the key
  yearsOfwarranty?: number;
  color?: string;
  typeOfCar?: string;
};

// or i can write the same ass Array<Car>

const cars: Car[] = [
  {
    brand: "audi",
    year: 2000,
    yearsOfwarranty: 10,
  },
  {
    brand: "fiat",
    year: 2002,
  },
  {
    brand: "toyota",
    year: 2002,
  },
];

const carsAfter2001 = cars.filter((car) => car.year > 2001);

console.log(carsAfter2001);

// Union Types - Combining different Types

// id can be either number or string
// on return we have to specifically tell to the function what type of array will reeturn
const printId = (id: number | string): string | number | number[] => {
  const arr = [1, 2, 3].map((value) =>
    // this can be rewritten with ternary
    // if (typeof id === "string") {
    //   return value + parseInt(id);
    // } else {
    //   return value + id;
    // }

    typeof id === "string" ? value + parseInt(id) : value + id
  );
  return arr;
};

// Type Aliases is declaring the type that we want to use

type Name = {
  firstName: string;
  lastName: string;
};

type Person = {
  name: Name;
  address: string;
  age: number;
  telephoneNumber: string;
};

// Type Assertions

// we are using as to declare the return value as something
// example:
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// Literal Types

// telling specifically what it should take as a parametter
// a string with value left or right or center;
// same with numbers 1|2|3
const printText = (text: string, aligment: "left" | "right" | "center") => {
  // do something
};

// Narrowing

const padLeft = (padding: number | string, input: string): string => {
  // do something
  return "";
};

// before we should do something we need to check if it can be done
// for both cases of the passed argument

const example = (x: string | number, y: string | boolean) => {
  // do something
  if (x === y) {
    // meaning they are both strings
    // we work with any string methods
    x.toLowerCase();
  } else {
    // meaning the they are not the same could be 3="3" , not the same
    // do something else
  }
};

// Assignements

let x: string | number = Math.random() < 0.5 ? 10 : "hello world!";

// Control flow analysis

// if the padding is NOT a number it skips the if statements
// and typescripts understand that is a string and  continues
// with the other return

function padLeft2(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return; // something
  }
  return padding + input;
}

// More on Functions

// Function Type Expressions

// Basically we can declare  that our type will take functions

type Car2 = {
  manufacturer: string;
  year: Date;
  color?: string;
  miles?: number;
  gears: "auto" | "manual";
  // we declare the name of the function AND what will Return;
  startEngine: (miliseconds: number) => string;
};

const car1: Car2 = {
  manufacturer: "Ferrari",
  year: new Date(),
  color: "red",
  gears: "auto",
  startEngine: (miliseconds) => `Engine Started ${miliseconds}`,
};

console.log(car1.startEngine(10));

type ElecticCar = {};
// IMPORTANT -----> Call Signatures

/*
In JavaScript, functions can have properties in addition
to being callable. However, the function type expression
syntax doesn’t allow for declaring properties.
If we want to describe something callable with properties,
we can write a call signature in an object type:
*/

// so above we couldnt add parameters into the startEngine function

// If we want to add parameters we can write a call signature in an object type

// Need to check it more
