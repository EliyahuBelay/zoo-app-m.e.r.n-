const userRout = require('express').Router();

const RegisterCtr = require('../Controllers/userController');


userRout.post('/register',RegisterCtr.Register)
userRout.post('/login',RegisterCtr.LogIn)







module.exports = userRout;