import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

router.get('/products', (req: Request, res: Response, next: NextFunction) => {
  res.json('List of cats');
});

export default router;
