const dotenv = require('dotenv');
dotenv.config();



const express = require('express');









const app = express();
app.listen(process.env.PORT)
app.get('/',(request,response)=>{
    console.log("server online");
})


