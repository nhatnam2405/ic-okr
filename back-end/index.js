require("dotenv").config();
const mongoose = require('mongoose').set('debug', true);
const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
     
// parse application/json
app.use(express.json())

const httpServer = require("http").createServer(app);

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
        dbName: process.env.DB_NAME,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${connection.connection.host}`);
}; 
connectDB();

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
//router
app.get("/", (req, res) => {
    res.send("Server is OK");
  })
const authRouter = require("./routes/auth.route");
  app.use("/api/auth", authRouter);
