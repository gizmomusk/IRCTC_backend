const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/trainRoutes"));
app.use("/api", require("./routes/bookingRoutes"));

app.listen(3000, () => console.log("Server running on port 3000"));
