import express from 'express';
import { getUserById } from './user-controller';

const router = express.Router();

router.route('/:id').get(getUserById);

export default router;
