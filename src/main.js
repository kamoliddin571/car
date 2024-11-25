import express from "express";
import cors from "cors";
import { router } from "./modules/routes.js";

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api", router);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
