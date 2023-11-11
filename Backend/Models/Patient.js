const mongoose = require("mongoose")

const Patient = new mongoose.Schema({
    userName:{
        type : string ,
        required : true 
    },
    firstName:{
        type : string ,
        required : true 
    },
    lastName:{
        type : string ,
        required : false 
    },
    localAddress:{
        type : string ,
        required : true 
    },
    phoneNumber:{
        type : Number ,
        required : false 
    },
    email:{
        type : string ,
        required : true 
    },
    Aadhar:{
        type : Number ,
        required : true 
    },
    treatmentHistory :[
        {
            type : string,
            default:"",
            required : false
        }
    ]
})

const PatientModel = mongoose.model("Patient" , Patient)

module.exports = PatientModel;