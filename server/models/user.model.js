import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({});

const User = mongoose.model("User", userSchema);

export default User;
