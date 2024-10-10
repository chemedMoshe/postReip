import mongoose, { Schema, Document, Types } from "mongoose";

export interface IComment {
  content: string;
  author: Types.ObjectId;
  createdAt: Date;
}

export interface IPost extends Document {
  _id: Types.ObjectId;
  title: string;
  content: string;
  author: Types.ObjectId;
  comments: IComment[];
}



const PostSchema = new Schema<IPost>({

  title: { type: String,
     required: [true, "Please provide a title"],
     min:[4,'To few chars'] 
    },
  content: { type: String,
    required: [true, "Please provide a content"],
    min:[2,'To few chars'],
}
})


export default mongoose.model<IPost>("Post", PostSchema);
