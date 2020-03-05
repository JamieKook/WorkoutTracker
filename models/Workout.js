const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const opts = {toJSON: {virtuals: true}}; 

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
 exercises: []
}, opts);

WorkoutSchema.virtual('totalDuration').get(function(){
  let totalDuration =0; 
  for (const exercise of this.exercises){
    console.log(exercise); 
    console.log(exercise.duration); 
    totalDuration += exercise.duration; 
  }
  return totalDuration; 
}); 

// WorkoutSchema.methods.addTotalDuration = function(){
//   this.totalDuration = 0; 
//   for (const exercise of this.exercises){
//     this.totalDuration += exercise.duration ; 
//   }
//   return this.totalDuration; 
// };

// WorkoutSchema.methods.testing = function(){
//   this.testing =true; 
// }; 

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;