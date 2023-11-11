// Import Packages
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const app = express();
const Doctor = require("./Models/Doctor")

// Port specification 
const port = 5555  
const url = "mongodb+srv://root:root@doctoconnect.qq9iqwv.mongodb.net/?retryWrites=true&w=majority"

// Connexting MongoDB database
mongoose.connect(url,{});

// Authenticating if the Use already exists in the database
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "Pratham";
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    Doctor.findOne({id: jwt_payload.sub}, function(err, Doctor) {
        if (err) {
            return done(err, false);
        }
        if (Doctor) {
            return done(null, Doctor);
        } else {
            return done(null, false);
            // Create New entry in the Database
        }
    });
}));

// Display text on the route
app.get("/", async(request , response)=>{
    response.send("GET API is working ")
})
// Running app on desired port 
app.listen(port,()=>{
    console.log("Your app is listening on PORT" + port);
})