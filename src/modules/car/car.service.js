import * as uuid from "uuid";
import { ResData } from "../../lib/resData.js";

class CarService {
  #cars = [
    { id: 1, name: "bmw", count: 19, price: 0 },
    { id: 2, name: "mers", count: 19, price: 0 },
    { id: 3, name: "audi", count: 7, price: 10000 },
  ];

  async getAll() {
    const data = this.#cars;

    return new ResData(200, "success", data);
  }

  async create(dto) {
    const newCar = {
      id: uuid.v4(),
      name: dto.name,
      count: dto.count,
      price: dto.price,
    };

    this.#cars.push(newCar);

    return new ResData(201, "success", newCar);
  }
}

const carService = new CarService();

export { carService };
