import express from 'express'
import { getLeads } from '../controllers/leadController.js';
const router = express.Router();

//GET /api/leads
router.get('/', getLeads);

//GET /api/leads/:id
router.get('/:id', (req, res) => {
    res.json({
        message: `Get lead with id ${req.params.id}`
    });
});

export default router;