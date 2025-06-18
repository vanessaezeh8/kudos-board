import {prisma}  from '../prisma/client.js';

const getBoards = async (req, res) => {
  try {
    const {category, search} = req.query;
    let whereClause = {};
    if (category && category !== 'All') {
      if (category === 'Recent') {
        const boards = await prisma.board.findMany({
          orderBy: { createdAt: 'desc' },
          take: 6
        });
        return res.status(200).json(boards);
      } else {
        whereClause.category = category ;
      }
    }
    if (search) {
      whereClause.title = { contains: search, mode: 'insensitive' };
    }
    const boards = await prisma.board.findMany({
      where: whereClause
    });
    res.status(200).json(boards);
  } catch (error) {
    console.error('Error getting boards', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const getBoard = async (req, res) => {
  try {
    const boardId = parseInt(req.params.id);
    const board = await prisma.board.findUnique({
      where: { id: boardId },
      include: { cards: true }
    });
    if (!board) {
      return res.status(404).json({ message: 'Board not found' });
    }
    res.status(200).json(board);
  } catch (error) {
    console.error('Error getting board', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
 };

export {
  getBoards,
  getBoard};
