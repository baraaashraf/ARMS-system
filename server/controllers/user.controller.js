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
      country: user.country,
      role: user.role,
      maritalStatus: user.maritalStatus,
      identityCardOrPassportNo: user.identityCardOrPassportNo,
      gender: user.gender,
      address: user.address,
      birthday: user.birthday,
      religion: user.religion,
      mobile: user.mobile,
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
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
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
    res.status(404);
    throw new Error("User not found");
  }
});

// AUTH-- put /api/users/profile
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.body._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.country = req.body.country || user.country;
    user.maritalStatus =
      req.body.maritalStatus.toLowerCase() || user.maritalStatus.toLowerCase();
    user.identityCardOrPassportNo =
      req.body.identityCardOrPassportNo || user.identityCardOrPassportNo;
    user.gender = req.body.gender.toLowerCase() || user.gender.toLowerCase();
    user.address = req.body.address || user.address;
    user.birthday = req.body.birthday || user.birthday;
    user.religion = req.body.religion || user.religion;
    user.mobile = req.body.mobile || user.mobile;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      country: updatedUser.country,
      maritalStatus: updatedUser.maritalStatus,
      identityCardOrPassportNo: updatedUser.identityCardOrPassportNo,
      gender: updatedUser.gender,
      address: updatedUser.address,
      birthday: updatedUser.birthday,
      religion: updatedUser.religion,
      mobile: updatedUser.mobile,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const getAdmins = asyncHandler(async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" });
    res.json(admins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: errorMessage });
  }
});

const deleteAdminById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await User.findByIdAndDelete(id);
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});


export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAdmins,
  deleteAdminById,
};
