const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const cors = require("cors");
const { json } = require("body-parser");
const port = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());

//ROUTES
const studentsRoute = require("./routes/students");
app.use("/students", studentsRoute);

app.get("/", (req, res) => {
	res.send("we are at home");
});

//mongoose connection
mongoose.connect(
	process.env.DB_CONNECTION,
	{
		useUnifiedTopology: true,
		useNewUrlParser: true,
	},
	() => {
		console.log("connected to DB");
	}
);

//port
app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}/`);
});
