import { ResData } from "../../lib/resData.js";
import { carService } from "./car.service.js";

class CarController {
  #carService;
  constructor(carService) {
    this.#carService = carService;
  }

  async getAllCar(req, res, next) {
    const resData = await this.#carService.getAll();

    res.status(resData.statusCode).json(resData);
  }

  async createCar(req, res, next) {
    const dto = req.body;

    if (!dto.name || isNaN(dto.count) || isNaN(dto.price)) {
      const resData = new ResData(400, "invalid data");
      return res.status(resData.statusCode).json(resData);
    }

    const resData = await this.#carService.create(dto);
    return res.status(resData.statusCode).json(resData);
  }
}

const carController = new CarController(carService);

export { carController };
