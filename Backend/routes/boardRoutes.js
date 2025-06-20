import express from "express";
import {
  createBoard,
  getBoard,
  getBoards,
  deleteBoard,
} from "../controllers/boardController.js";
const router = express.Router();

router.post("/", createBoard);
router.get("/:boardId", getBoard);
router.get("/", getBoards);
router.delete("/:id", deleteBoard);

export default router;
