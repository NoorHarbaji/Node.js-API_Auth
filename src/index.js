const express = require("express");
const app = express();

// Import Routes
const authRout = require("./routes/auth");

app.use("/api/user", authRout);

app.listen(3000, () => console.log("server up runing"));
