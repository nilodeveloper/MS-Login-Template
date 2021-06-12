import { Router } from 'express';
import UserController from './user.controller';

const usersRouter = Router();

usersRouter.get('/', UserController.index);

usersRouter.post('/create', UserController.create);

export default usersRouter;