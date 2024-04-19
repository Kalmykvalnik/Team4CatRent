import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

router.get('/basket', (req: Request, res: Response, next: NextFunction) => {
  res.json('Basket');
});

export default router;
