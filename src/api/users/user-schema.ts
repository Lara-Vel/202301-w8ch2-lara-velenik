import mongoose, { Schema } from 'mongoose';

export interface User {
  name: string;
  lastname: string;
  email: string;
  profileUrl: string;
  phone: string;
}

const UserSchema = new Schema<User>({
  name: String,
  lastname: String,
  email: String,
  profileUrl: String,
  phone: String,
});

export const UserModel = mongoose.model<User>('User', UserSchema, 'users');
