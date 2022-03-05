const JwtStategy = require('passport-jwt').Strategy;//impoeting the astrategy 
const ExtractJwt = require('passport-jwt').ExtractJwt;//importing the class that able to invoce the func that take the token from the requeste
const users = require('../Models/userModel');//importing the collection in the data base

const options = {
    secretOrKey:process.env.SECRET_KEY
}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

module.exports = (passport)=>{
    passport.use(new JwtStategy(options,(jwt_payloud,done)=>{
        console.log(jwt_payloud);
        users.findOne({_id:jwt_payloud.user._id})
        .then((user)=>{
            if(user) return done(null,user)
            return done(null,false)
        })
        .catch((err)=> done(err,false))
    }))
}



