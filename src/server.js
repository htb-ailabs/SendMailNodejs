import express from "express";
import emailRouter from "./routers/email.router.js";

const app = express();
// const cors = require("cors");
app.use(express.json());
// app.use(cors({ origin: ["google.com", "yahoo.com.vn"] }));
// app.use(cors());

const PORT = process.env.PORT || 3069;

// require("dotenv").config();

app.use(express.json());

// app.use(
//   cors({
//     origin: ["http://localhost:3069"],
//     credentials: true,
//   })
// );

app.use(emailRouter);
// app.use("/api", require("./routes/email"));

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost/${PORT}`);
});
