import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import ejs from "ejs";
import dotenv from "dotenv";

import mainRouter from "./src/routes/pages/main.route.js";
import productRouter from "./src/routes/produtos/product.route.js";

dotenv.config();

const __dirname = path.resolve();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use("/src/views", express.static(path.join(__dirname, "views")));
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", mainRouter);
app.use("/", productRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server is running in http://localhost:${process.env.PORT || 3000}`,
  );
});
