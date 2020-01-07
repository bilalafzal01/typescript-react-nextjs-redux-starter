import express from "express";
import cors from "cors";
import path from "path";

import todoRouter from "./routes/todo";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/images", express.static(path.join(__dirname, "static", "images")));
app.use("/todo", todoRouter);

app.listen(4000, () => {
  console.log("App is running on port 4000");
});
