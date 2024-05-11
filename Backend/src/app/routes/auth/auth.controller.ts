import { NextFunction, Request, Response, Router } from 'express';
import { createUser, login } from './auth.service';

const router = Router();

//register
router.post(
  '/user/register',
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
  '/user/login',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await login(req.body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
