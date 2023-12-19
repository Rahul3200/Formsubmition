const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    
    },
classId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Class',
  
    },
  
  amount: { type: String , required:true}
 /* paymentDate: { type: Date },*/
});

const Payment = mongoose.model("payments", paymentSchema);
module.exports = Payment;
