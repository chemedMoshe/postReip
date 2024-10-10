import mongoose, { Schema, Document, Types } from "mongoose";
import userModel from "./userModel";
export interface IComment {
  content: string;
  author: Types.ObjectId;
  createdAt: Date;
}

export interface IPost extends Document {
  _id: Types.ObjectId;
  title: string;
  content: string;
  author: mongoose.Types.ObjectId;
  comments: IComment[];
}
const CommentSchema = new Schema<IComment>({
  content: {
    type: String,
    required: [true, "Please provide a content"],
    minlength: [2, "To few chars"],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide an author"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})


const PostSchema = new Schema<IPost>({
  title: {
    type: String,
    required: [true, "Please provide a title"],
    minLength: [4, "To few chars"],
  },
  content: {
    type: String,
    required: [true, "Please provide a content"],
    minlength: [2, "To few chars"],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide an author"],
  },
  comments: {
    type: [CommentSchema],
    default: [],
  },
});

export default mongoose.model<IPost>("Post", PostSchema);
