const { json } = require("body-parser");
const express = require("express");
const Students = require("../models/Students");
const router = express.Router();

//GET ALL THE STUDENT
router.get("/", async (req, res) => {
	try {
		const post = await Students.find();
		res.json(post);
	} catch (err) {
		res.json({ message: err });
	}
});

//SUBMIT A STUDENT
router.post("/", async (req, res) => {
	const student = new Students({
		name: req.body.name,
		fatherName: req.body.fatherName,
		motherName: req.body.motherName,
	});
	try {
		const savedStudent = await student.save();
		res.json(savedStudent);
	} catch (err) {
		res.json({ message: err });
	}
});

//GET STUDENT BY ID
router.get("/:studentId", async (req, res) => {
	try {
		const student = await Students.findById(req.params.studentId)
		res.json(student)
	} catch (error) {
		res.json({ message: error })
	}
})

module.exports = router;
