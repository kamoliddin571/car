import * as fruitService from "./fruit.service.js";

function getAllFruit(req, res, next) {
  const data = fruitService.getAll();

  res.status(200);
  res.json(data);
}

function createFruit(req, res, next) {
  const dto = req.body;

  if (!dto.name || isNaN(dto.count) || isNaN(dto.price)) {
    return res.status(400).json({ message: "invalid data" });
  }

  const data = fruitService.create(dto);

  res.status(201);
  res.json(data);
}

export { getAllFruit, createFruit };
