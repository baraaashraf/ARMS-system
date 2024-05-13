import mongoose from "mongoose";

const surveySchema = mongoose.Schema(
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

const surveyAnalysisSchema = mongoose.Schema(
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

const surveyModel = mongoose.model("Survey", surveySchema);
const surveyAnalysisModel = mongoose.model(
  "surveyAnalysis",
  surveyAnalysisSchema
);

export { surveyModel, surveyAnalysisModel };
