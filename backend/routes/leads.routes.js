import express from 'express'
const router = express.Router();

//GET /api/leads
router.get('/', (req, res) => {
    res.json({
        message: 'Get all leads'
    });
});

//GET /api/leads/:id
router.get('/:id', (req, res) => {
    res.json({
        message: `Get lead with id ${req.params.id}`
    });
});

export default router;