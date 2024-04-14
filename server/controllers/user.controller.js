import asyncHandler from "express-async-handler";
import User from "../models/users.model.js";
import generateToken from "../utils/generateToken.js";

// AUTH-- POST /api/users/auth
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
// AUTH-- POST /api/users/register
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    country: "",
    maritalStatus: "unspecified",
    identityCardOrPassportNo: "",
    gender: "unspecified",
    address: "",
    birthday: "",
    religion: "",
    mobile: "",
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      country: user.country,
      maritalStatus: user.maritalStatus,
      identityCardOrPassportNo: user.identityCardOrPassportNo,
      gender: user.gender,
      address: user.address,
      birthday: user.birthday,
      religion: user.religion,
      mobile: user.mobile,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// AUTH-- POST /api/users/auth
const logoutUser = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};

// AUTH-- get /api/users/profile
const getUserProfile = asyncHandler(async (req, res) => {
  console.log(req.user)
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// AUTH-- put /api/users/profile
const updateUserProfile = asyncHandler(async (req, res) => {
  console.log(req.user)
  const user = await User.findById(req.user._id);
  console.log(user)

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;


    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
