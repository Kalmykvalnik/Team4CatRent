import { NextFunction, Request, Response, Router } from 'express';
import { createUser } from './auth.service';

const router = Router();

//register
router.post(
  '/register',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body);
      const user = await createUser({ ...req.body });
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
);

//login
router.post(
  'login',
  async (req: Request, res: Response, next: NextFunction) => {
    res.json('Basket');
  }
);

export default router;
