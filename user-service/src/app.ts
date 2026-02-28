import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(`/api/users`, userRoutes);

export default app;
