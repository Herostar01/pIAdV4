const mongoose = require("mongoose");

const ProspectSchema = new mongoose.Schema({
    one : {
        type: String,
        required: [true, "Must make a selection"],
        
    },
    two: {
        type: String,
        required: [true, "Must make a selection"],
        
    },
    three: {
        type: String,
        required: [true, "Must make a selection"],
        
    },
    four: {
        type: String,
        required: [true, "Must make a selection"]
    },
    five: {
        type: String,
        required: [true, "Must make a selection"]
    },
    six: {
        type: String,
        required: [true, "Must make a selection"]
    },
    seven: {
        type: String,
        required: [true, "Please describe your injuries"],
        minlength: [3, "Please describe your injuries"]
    },
    eight: {
        type: String,
        required: [true, "Please write your full name"],
        minlength: [3, "Please write your full name"]
    },
    nine: {
        type: String,
        required: [true, "Please write your email"],
        minlength: [3, "Please write your email"] 
    },
    ten: {
        type: String,
        required: [true, "Please write your ten digit cell phone number"],
        minlength: [10, "Please enter your ten digit cell phone number"]

    }

}, {timestamps: true});

// make the Pet schema and export
const Prospect = mongoose.model("Prospect", ProspectSchema);
module.exports = Prospect; 