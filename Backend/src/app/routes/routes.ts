import { Router } from 'express';
import testController from './test/test.controller';

const api = Router().use(testController);
export default Router().use('/api', api);
