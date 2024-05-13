import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import { connectDB } from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

///ROUTES
import userRoutes from "./routes/user.routes.js";
import BoardofStudiesRoutes from './routes/phase4/boardOfStudies.routes.js'
import AssersorsRoutes from './routes/phase4/IntExtAssessors.routes.js'
import surveyRoutes from './routes/phase4/survey.routes.js'
const port = process.env.PORT || 5000;

connectDB();
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
////////////////////////////////////////////
app.use("/api/users", userRoutes);
app.use("/api/bit", BoardofStudiesRoutes);
app.use("/api/bit", AssersorsRoutes);
app.use("/api/bit", surveyRoutes);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Listening on port", port);
});
