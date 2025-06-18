import { prisma } from "../prisma/client.js";

const getCardsByBoard = async (req, res) => {
    try{
        const boardId = parseInt(req.params.boardId);
        const cards = await prisma.card.findMany({where: {boardId}});
        res.json(cards);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export {getCardsByBoard};
