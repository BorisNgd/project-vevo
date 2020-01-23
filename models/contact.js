var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    gender:{
        type : String
    },
    phone : {
        type: Number
    },
    created_date : {
        type : Date,
        default : Date.now()
    }
});

var Contact = module.exports = mongoose.model('contact' ,contactSchema);

module.exports.get =  (callback , limit) => {
    Contact.find(callback).limit(limit);
} 
