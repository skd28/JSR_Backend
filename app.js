import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-routes.js";
import bookingsRouter from "./routes/booking-routes.js";
import cors from "cors";
dotenv.config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
  res.send("Server is Running");
});
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);
const PORT = 5000 || process.env.PORT
const mongoUri = process.env.MONGODB_URL;
mongoose.connect(mongoUri)
.then(()=>{
  console.log("Database Connected Sucessfull ")
}) 
.catch((e)=>console.log("Error :",e));

app.listen(PORT, () =>
  console.log(`Server is Running at ${PORT}`)
);
