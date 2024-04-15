import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

router.get('/test', (req: Request, res: Response, next: NextFunction) => {
  res.json("Indicates that's API is working");
});

export default router;
