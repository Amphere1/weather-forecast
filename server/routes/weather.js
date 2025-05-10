import express from "express";

const router = express.Router();

router.get('/api/weather', (req,res) => {
    res.json({message: 'weather route'});
});

export default router;