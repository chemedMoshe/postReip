import userDB, { IUser } from "../models/userModel";

export const cratenewUser = (userModel: IUser) => {
  const newUser = new userDB(userModel);

  return newUser.save();
};
