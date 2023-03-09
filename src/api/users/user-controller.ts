import { RequestHandler } from 'express';
import { UserQueryId } from '../../types/types';
import { UserModel } from './user-schema';

export const getUserById: RequestHandler<UserQueryId> = async (req, res) => {
  const { id } = req.params;

  const user = await UserModel.findById({ _id: id }).exec();

  if (user !== null) {
    return res.status(200).json(user);
  }

  return res.status(404);
};
