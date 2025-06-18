import express from 'express';
import {
    getCardsByBoard,
    createCard,
    upvoteCard,
    deleteCard } from '../controllers/cardController.js';

const router = express.Router();

router.get('/', getCardsByBoard);
router.post('/', createCard);
router.post('/upvote', upvoteCard);
router.delete('/delete', deleteCard);

export default router;
