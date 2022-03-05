const mongoose = require('mongoose');
const schema = mongoose.Schema;


const Animal = new schema({
    name:{type:String,required:true},
    dateBirth:{type:String,required:true},
    cageNumber:{type:Number,required:true},
    gender:{type:String,required:true},
    kind:{type:String,default:false},
},
{
    timestamps:true
})

module.exports = mongoose.model('Animal',Animal);