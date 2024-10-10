import express from "express";
import dotenv from "dotenv";
import postRouter from "./routes/postRoutes";
import userRouter from "./routes/userRoutes";
import { errorHandler } from "./middleware/errorHandler";
import connectDB from "./config/db";
import { cratenewUser } from "./service/userService";
import userModel, { IUser } from "./models/userModel";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

connectDB();
// cratenewUser(
//   new userModel({
//     username: "string",
//     email: "m0504136536gmail.com",
//     profile: {
//       bio: "string",
//       socialLinks: ["aaaaa", "aaaa"],
//     },
//   })
// );
// Routes
app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
