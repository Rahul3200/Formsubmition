const express = require('express');
const Payment = require('../model/Payment');
const User = require('../model/User');
const Class = require('../model/Class'); // Import the Class model
const authenticate=require("../auth/Authenticate")
const router = express.Router();

router.post("/:batchTime",authenticate,async (req, res) => {
  try {
    const batchTime = req.params.batchTime;
    const  amount  = req.body.money;
   console.log({batchTime},{amount});
   const userId= req.user.id;
   console.log(userId);
    // Retrieve or create the class based on batchTime
    let foundClass = await Class.findOne({ batchTime });
     console.log("Hello found",foundClass);
    // If class doesn't exist for this batchTime, create a new one
    if (!foundClass) {
      const newClass = new Class({ batchTime, monthlyFee: amount });
      foundClass = await newClass.save();
    }

    const classId = foundClass._id; // Obtain the classID
    console.log(classId);
    // Create a new payment
    const newPayment = new Payment({userId , classId, amount});
    console.log(newPayment);
    const savedPayment = await newPayment.save();
   console.log("Hello Rahul",savedPayment);
    // Update the User schema with the payment information
    /*const updatedUser = await User.findOneAndUpdate(
      { _id: userID, "classes.classID": classID },
      {
        $set: {
          "classes.$.payment": true,
          "classes.$.paymentId": savedPayment._id,
        },
        $push: {
          payments: { classID, paymentID: savedPayment._id, amount, paymentDate },
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User or class not found" });
    }
*/
   /* res.status(201).json({ savedPayment, updatedUser });*/
   res.status(200).json({ message:"Payment Successful"});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;