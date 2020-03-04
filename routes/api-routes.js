const path = require("path");
const db = require("../models"); 

module.exports = function(app) {

    //When are API methods being invoked?

    app.get("/api/workouts", function(req, res) {
        //get all workout data and return json 
            // when api.getLastWorkout invoked
        db.Workout.find({})
            .then(function(dbWorkouts) { 
            res.json(dbWorkouts); 
            })
            .catch(function(err){
                res.status(401).json(err); 
            });    
    }); 

    app.put("/api/workouts/:id", function(req, res) {
        //add a new exercise to an exisiting workout and return json
            // when API.addExercise invoked
        db.Workout.findByIdAndUpdate(req.params.id, { $push: {exercises: req.body}}).then(function(dbWorkout){
            res.json(dbWorkout);
        })
        .catch(function(err){
            res.status(401).json(err); 
        });  

    }); 

     app.post("/api/workouts", function(req, res) {
        //add a new workout to database
        // when API.createWorkout is invoked
        console.log(req.body); 
        db.Workout.create(req.body)
            .then(function(dbWorkout){
                console.log(dbWorkout); 
                res.json(dbWorkout); 
            })
            .catch(function(err){
                res.status(400).json(err); 
            });
    }); 

     app.get("/api/workouts/range", function(req, res) {
        //????? what is this doing?
        // when API.getWorkoutsInRange
        res.json()
    }); 
}
