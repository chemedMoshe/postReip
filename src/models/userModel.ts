import mongoose, { Schema, Document, Types } from "mongoose";
import Post from "./postModel";
import val, { isEmail } from "validator";
export interface IUser extends Document {
  username: string;
  email: string;
  profile?: {
    bio?: string;
    socialLinks?: string[];
  };
  posts: mongoose.Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    minlength: [4, "To few chars"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    validate: [isEmail, "Please enter a valid email"],
    unique: true,
  },
  profile: {
    bio: { String },
    socialLinks: { type: [String] },
  },
  posts: {
    type: [mongoose.Types.ObjectId, { ref: Post }],
    defult: [],
  },
});

export default mongoose.model<IUser>("User", UserSchema);
