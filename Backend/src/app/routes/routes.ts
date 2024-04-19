import { Router } from 'express';
import testController from './test/test.controller';
import authController from './auth/auth.controller';
import basketController from './basket/basket.controller';
import productController from './product/product.controller';

const api = Router().use(
  testController,
  authController,
  basketController,
  productController
);
export default Router().use('/api', api);
