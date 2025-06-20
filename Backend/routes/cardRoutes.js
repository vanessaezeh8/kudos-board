import express from "express";
import {
  getCardsByBoard,
  createCard,
  upvoteCard,
  deleteCard,
  tooglePinCard,
} from "../controllers/cardController.js";

const router = express.Router();

router.get("/:boardId", getCardsByBoard);
router.post("/", createCard);
router.post("/:cardId/upvote", upvoteCard);
router.delete("/:cardId", deleteCard);
router.put("/:cardId/pin", tooglePinCard);

export default router;
