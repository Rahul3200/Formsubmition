const {mongoose,Schema}= require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required:true},
  email: { type: String ,required:true},
  password: { type: String ,required:true},
  age: { type: String , required:true},
 /* enrollmentDate: { type: Date },
  classId: {
    type: Schema.Types.ObjectId,
    ref: 'Class',
    
    },
  payments: [
    {
      classID: {type: String},
      paymentID: { type: String },
      amount: { type: Number },
      paymentDate: { type: Date },
    },
  ],*/
}); 

const User = mongoose.model("users", userSchema);
module.exports = User;
