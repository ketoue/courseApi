const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id_reservation:{
        type:String,
        required : true
    },
    id_chauffeur:{
        type:String,
        required : true
    },
    id_client:{
        type:String,
        required : true
    },
    statut:{
        type:String,
        required : true
    },
    date_depart:{
        type:Date,
        required : true
    },
    date_Arrive:{
        type:Date,
        required : true
    },

    
})

module.exports = mongoose.model('Course', UserSchema,'course');