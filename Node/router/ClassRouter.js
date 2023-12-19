const express = require("express");
const Class = require("../model/Class");
const User = require("../model/User")

const router = express.Router();

router.post("/create", async (req, res) => {
    try {
        const { batchTime, monthlyFee } = req.body;
        const newClass = new Class({ batchTime, monthlyFee, participants: [] });
        const savedClass = await newClass.save();

        res.status(201).json(savedClass);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put("/classes/:classID/enroll", async (req, res) => {
    try {
        const classID = req.params.classID;
        const { userID } = req.body;
        const enrollmentMonth = new Date().toLocaleString('default', { month: 'long' });

        // Update the Class schema
        const updatedClass = await Class.findByIdAndUpdate(
            classID,
            { $push: { participants: { userID, enrollmentMonth } } },
            { new: true }
        );

        if (!updatedClass) {
            return res.status(404).json({ message: "Class not found" });
        }

        // Update the User schema
        const updatedUser = await User.findByIdAndUpdate(
            userID,
            { $push: { classes: { classID, batchTime: updatedClass.batchTime, enrollmentMonth } } },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ updatedClass, updatedUser });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.get("/classes", async (req, res) => {
    try {
        const classes = await Class.find();
        res.json(classes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/classes/:classID", async (req, res) => {
    try {
        const classID = req.params.classID;
        const classData = await Class.findById(classID);

        if (!classData) {
            return res.status(404).json({ message: "Class not found" });
        }

        res.json(classData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
