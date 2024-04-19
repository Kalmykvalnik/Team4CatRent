import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

//register
router.post(
  '/user',
  async (req: Request, res: Response, next: NextFunction) => {
    res.json('Basket');
  }
);

//login
router.post(
  '/user/login',
  async (req: Request, res: Response, next: NextFunction) => {
    res.json('Basket');
  }
);

export default router;
