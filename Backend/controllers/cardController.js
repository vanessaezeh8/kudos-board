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

const createCard = async (req, res) => {
    try{
        const { message, gifUrl, author, boardId } = req.body;


        if(!message || !gifUrl || !boardId){
            return res.status(400).json({message: "Missing required fields"});
        }
        const card = await prisma.card.create({
            data: {
                message,
                gifUrl,
                author,
                boardId: parseInt(boardId)
            }
        });
        res.json(card);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
 };

 const upvoteCard = async (req, res) => {
    try{
        const cardId = parseInt(req.params.cardId);
        const card = await prisma.card.update({
            where: {id: cardId},
            data: {
                upvotes: {increment: 1}
            }
        });
        res.json(card);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
 };
export {
    getCardsByBoard,
    createCard,
    upvoteCard
 };
