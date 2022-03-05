//------------------------------------
const dotenv = require('dotenv');
dotenv.config();
//------------------------------------




//------------------------------------

const express = require('express');
//------------------------------------



//---------connecting the database-------------------
require('./DB/index')
//----------------connecting the database------------


const cors = require('cors');


const animalRouter = require('./Routing/animalRout');
const workerRouter = require('./Routing/workerRout');
const userRouter = require('./Routing/userRout');


//----------------importing the passport module-----------
const passport = require('passport');
//----------------importing the passport module-----------



const app = express();

app.use(express.json());

app.use(cors());


app.use(passport.initialize());


app.use('/worker',passport.authenticate('jwt',{session:false}),workerRouter);
app.use('/animal',passport.authenticate('jwt',{session:false}),animalRouter);

app.use('/auth',userRouter);


app.listen(process.env.PORT)


app.get('/',(request,response)=>{
    console.log("server online");
    response.send("server online");
})


