import { prisma } from "../prisma/client.js";

const getCardsByBoard = async (req, res) => {
  try {
    const boardId = parseInt(req.params.boardId);
    const cards = await prisma.card.findMany({ where: { boardId } });
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCard = async (req, res) => {
  try {
    const { message, gifUrl, author, boardId } = req.body;
    if (!message || !gifUrl || !boardId) {
      return res
        .status(400)
        .json({ message: "Message, gifUrl and boardId are required" });
    }
    const card = await prisma.card.create({
      data: {
        message,
        gifUrl,
        author,
        boardId: parseInt(boardId),
      },
    });
    res.status(201).json(card);
  } catch (error) {
    console.error("Error creating card:", error);
    res.status(500).json({ message: error.message });
  }
};

const upvoteCard = async (req, res) => {
  try {
    const cardId = parseInt(req.params.cardId);
    const card = await prisma.card.update({
      where: { id: cardId },
      data: {
        upvotes: { increment: 1 },
      },
    });
    res.json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCard = async (req, res) => {
  try {
    const cardId = parseInt(req.params.cardId);
    const card = await prisma.card.delete({ where: { id: cardId } });
    res.json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const tooglePinCard = async (req, res) => {
  const { cardId } = req.params;
  try {
    const card = await prisma.card.findUnique({
      where: { id: parseInt(cardId) },
    });
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }

    const updatedCard = await prisma.card.update({
      where: { id: parseInt(cardId) },
      data: {
        pinned: !card.pinned,
        pinnedAt: card.pinned ? null : new Date(),
      },
    });
    res.json(updatedCard);
  } catch (error) {
    console.error("Error toogling pin:", error);
    res.status(500).json({ message: error.message });
  }
};

export { getCardsByBoard, createCard, upvoteCard, deleteCard, tooglePinCard };
