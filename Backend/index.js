import express from "express";
import cors from "cors";
import boardRoutes from "./routes/boardRoutes.js";
import cardRoutes from "./routes/cardRoutes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Kudos Board is up and running!");
});

app.use("/boards", boardRoutes);
app.use("/cards", cardRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
