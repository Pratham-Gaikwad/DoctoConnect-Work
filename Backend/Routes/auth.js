const express = require("express");
const router = express.Router();
const Doctor = require("../Models/Doctor");
const bycrpt = require("bcrypt")

// POST route to register the Doctor 

router.post('/register',async(request,response)=>{
    // When called the request body must be in format {firstName,lastname,email,aadhar,userName,phoneNumber,licenceNumber,hospital,photo,localAddress}
    const {firstName,lastname,email,aadhar,userName,phoneNumber,licenceNumber,hospital,photo,localAddress}=request.body;

    // Checking if the user already exists 
    const Doctor = await Doctor.findOne({userName : userName});
    if (Doctor){
        return response.status("402").json({error : "This user already exists."})
    }

    // else validate the request and create new user 
    const hashPassword = bycrpt.hash(password,10);
    const newData = {firstName,lastname,email,aadhar,userName,phoneNumber,licenceNumber,hospital,photo,localAddress};
    const newDoctor = await Doctor.create(newData);

    // Generating a unique Token for each doctor 

});