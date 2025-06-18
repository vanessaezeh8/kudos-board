import { prisma } from "../prisma/client.js";

const getBoards = async (req, res) => {
  try {
    const { category, search, sort } = req.query;
    let boards;
    if (sort === "recent") {
      boards = await prisma.board.findMany({
        orderBy: { createdAt: "desc" },
        take: 6,
      });
    } else if (category) {
      const boards = await prisma.board.findMany({
        where: { category },
      });
    } else if (search) {
      boards = await prisma.board.findMany({
        where: {
          title: {
            contains: search,
            mode: "insensitive",
          },
        },
      });
    } else {
      boards = await prisma.board.findMany();
    }
    res.status(200).json(boards);
  } catch (error) {
    console.error("Error getting boards", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getBoard = async (req, res) => {
  try {
    const boardId = parseInt(req.params.id);
    const board = await prisma.board.findUnique({
      where: { id: boardId },
      include: { cards: true },
    });
    if (!board) {
      return res.status(404).json({ message: "Board not found" });
    }
    res.status(200).json(board);
  } catch (error) {
    console.error("Error getting board", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const createBoard = async (req, res) => {
  try {
    const { title, category, author } = req.body;
    if (!title || !category) {
      return res
        .status(400)
        .json({ message: "Title and category are required" });
    }
    const board = await prisma.board.create({
      data: { title, category, author },
    });
    res.status(201).json(board);
  } catch (error) {
    console.error("Error creating board", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const deleteBoard = async (req, res) => {
  try {
    const boardId = parseInt(req.params.id);
    await prisma.board.delete({ where: { id: boardId } });
    res.status(200).json({ message: "Board deleted successfully" });
  } catch (error) {
    console.error("Error deleting board", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export {
  getBoards,
  getBoard,
  createBoard,
  deleteBoard };
