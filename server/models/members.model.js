import mongoose from "mongoose";

const MembersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    mobileno: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
  },
  {
    timestamps: true,
  }
);

const NominationOfBoard = mongoose.model("NominationOfBoard", MembersSchema);
const NominationOfBoard2 = mongoose.model("NominationOfBoard2", MembersSchema);

export { NominationOfBoard, NominationOfBoard2 };
