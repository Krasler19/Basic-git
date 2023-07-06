// const cars = ["BMW", "Infinity", "Audi", "Mersedes0"];

// console.log(cars[2]);

// const car = {
//     brand: "BMW",
//     model: "330i",
//     volume: 3.0,
//     hp: 400,
// }

// console.log(car.model);

// function calculateFuelConsumption(consumption, distance) {
//   console.log((distance * consumption) / 100);
// }

// calculateFuelConsumption(20, 1000);

//! ===========================================================

// const car = {
//   brand: "BMW",
//   model: "330i",
//   volume: 2.0,
//   hp: 500,
//   consumption: 15,
//   calculateFuelConsumption(distance) {
//     const consumption = (distance * this.consumption) / 100;
//     console.log(
//       `The car ${this.brand} ${this.model} will consume ${consumption} liters of gasoline per ${distance} kiliometers`
//     );
//     return consumption;
//   },
// };
// car.calculateFuelConsumption(3479);

// const car1 = {
//   brand: "Infinity",
//   model: "Q60s",
//   volume: 3.0,
//   hp: 550,
//   consumption: 17,
//   calculateFuelConsumption: car.calculateFuelConsumption,
// };

// car1.calculateFuelConsumption(678);
// car1.calculateFuelConsumption(10000);

//!==============================

//написати метод для каменю, який буде рахувати загальну вартість всіх каменів на складі і виводити повідомлення такого вигляду: На скаді лишилось 4 каменя Смарагд загальною вартістю 5200.

// const stone = {
//   name: "Смарагд",
//   price: 1300,
//   quantity: 4,
//   calculateCost() {
//     const cost = this.price * this.quantity;
//     console.log(
//       `On the stock stay ${this.quantity} quanitly ${this.name} total price ${cost} `
//     );
//     return cost;
//   },
// };
// stone.calculateCost()

//!================================

// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

const stones = [
  { name: "Смарагд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 3 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 200, quantity: 2 },
];

const totalValue = calcTotalPrice(stones, "Діамант");
console.log(totalValue);

function calcTotalPrice(stones, stoneName) {

  for (let i = 0; i < stones.length; i++) {
    const stone = stones[i];

    if (stone.name === stoneName) {
      return stone.price * stone.quantity;
    }
  }
}

