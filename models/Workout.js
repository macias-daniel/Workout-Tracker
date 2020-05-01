// import mongoose library
const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({

  day: {
    type: Date,
    default: Date.now()
  },

  exercises:
    [{
      type: {
        type: String,
        required: true
      },
      name: {
        type: String,
        trim: true,
        required: true
      },
      duration: {
        type: Number,
        required: true,
      },
      //Cardio
      distance: {
        type: Number
      },
      //Resistance
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      }
    }]


})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
