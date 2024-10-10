import mongoose, { Schema, Document, Types } from "mongoose";
import  Post  from "./postModel";

export interface IUser extends Document {
  _id: Types.ObjectId;
  username: string;
  email: string;
  profile: {
    bio?: string;
    socialLinks?: string[];
  };
  posts: Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    min:[4,'To few chars']
  },
  email: {
   type:String,
   required:[true,"Please provide a email"]
  },
  profile: {
    bio: String,
    socialLinks: [String],
  },
  posts: [{ type: Schema.Types.ObjectId, ref: Post }],
});




export default mongoose.model<IUser>("User", UserSchema);
