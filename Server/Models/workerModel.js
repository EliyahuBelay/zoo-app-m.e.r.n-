const mongoose = require('mongoose');
const schema = mongoose.Schema;


const Worker = new schema({
    name:{type:String,required:true},
    position:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phonNumber:{type:String,required:true}
},
{
    timestamps:true
})

module.exports = mongoose.model('Worker',Worker);