import * as uuid from "uuid";

const fruits = [
  { id: 1, name: "apple", count: 19, price: 0 },
  { id: 2, name: "banana", count: 19, price: 0 },
  { id: 3, name: "orange", count: 19, price: 0 },
];

function getAll() {
  return fruits;
}

function create(dto) {
  const newFruit = {
    id: uuid.v4(),
    name: dto.name,
    count: dto.count,
    price: dto.price,
  };

  fruits.push(newFruit);

  return newFruit;
}

export { getAll, create };
