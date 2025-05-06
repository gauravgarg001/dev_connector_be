const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    adhar: {
        type: Number,
        required: true
    },
    pan: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "admin"
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model("user", Userschema);