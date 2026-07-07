import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const __dirname = path.resolve();


const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server is running in http://localhost:${process.env.PORT || 3000}`,
  );
});
