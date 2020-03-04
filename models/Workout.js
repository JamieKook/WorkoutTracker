const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
 exercises: []
});

// WorkoutSchema.methods.addDay = function(){
//   this.day= new Date().setDate(new Date().getDate()); 
//   return this.day
// };



const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;