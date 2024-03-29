const mongoose = require('mongoose');
const User = require('./User.js');


const jobSchema = mongoose.Schema({

    Name : {
        type : String,
        required : true,
        max : 255
    },

    State : {
        type : String,
        required : true
    },
    
    Location : {
        type : String,
        required : true
    },

    Descriptions : {
        type :String,
        required : false,
    },

    Company : {
        type : String,
        required: true,
        max : 255
    },
   
    Lastdate : {
        type : String,
        required : false
    },

    Startdate :{
        type : String,
        required : true
    },

    CTC : {
        type : Number,
        required : true
    },
    
    Employer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    },

    Applicants : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
    ],
    
    skills : {
        type : String,
        required : false
    }
});


module.exports =  mongoose.model('Job',jobSchema);