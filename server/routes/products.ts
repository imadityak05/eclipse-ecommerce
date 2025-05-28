
import express from 'express';
import { products } from '../data/dummyData';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(products);
});

export default router;
