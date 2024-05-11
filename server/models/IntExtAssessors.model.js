import mongoose from "mongoose";

const NominationOfBoardSchema2 = mongoose.Schema(
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

const EndorsementOfSenateSchema2 = mongoose.Schema(
  {
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    targetDate: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
    },
    file: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const IssuanceOfAppointmentSchema2 = mongoose.Schema(
  {
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    targetDate: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
    },
    file: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const AppointmentDurationSchema2 = mongoose.Schema(
  {
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    targetDate: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
    },
    file: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const NominationOfBoard2 = mongoose.model(
  "NominationOfBoard2",
  NominationOfBoardSchema2
);
const EndorsementOfSenate2 = mongoose.model(
  "EndorsementOfSenate2",
  EndorsementOfSenateSchema2
);
const IssuanceOfAppointment2 = mongoose.model(
  "IssuanceOfAppointment2",
  IssuanceOfAppointmentSchema2
);
const AppointmentDuration2 = mongoose.model(
  "AppointmentDuration2",
  AppointmentDurationSchema2
);

export {
  NominationOfBoard2,
  EndorsementOfSenate2,
  IssuanceOfAppointment2,
  AppointmentDuration2,
};
