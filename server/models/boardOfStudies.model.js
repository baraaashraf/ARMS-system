import mongoose from "mongoose";

const NominationOfBoardSchema = mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const EndorsementOfSenateSchema = mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const IssuanceOfAppointmentSchema = mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const AppointmentDurationSchema = mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const AnalysisAndReportingSchema = mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const NominationOfBoard = mongoose.model('NominationOfBoard', NominationOfBoardSchema);
const EndorsementOfSenate = mongoose.model('EndorsementOfSenate', EndorsementOfSenateSchema);
const IssuanceOfAppointment = mongoose.model('IssuanceOfAppointment', IssuanceOfAppointmentSchema);
const AppointmentDuration = mongoose.model('AppointmentDuration', AppointmentDurationSchema);
const AnalysisAndReporting = mongoose.model('AnalysisAndReporting', AnalysisAndReportingSchema);

export {
  NominationOfBoard,
  EndorsementOfSenate,
  IssuanceOfAppointment,
  AppointmentDuration,
  AnalysisAndReporting
};
