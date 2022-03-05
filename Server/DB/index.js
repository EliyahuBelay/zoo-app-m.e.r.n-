const mongoose = require('mongoose');

mongoose.connect(process.env.STRING_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>console.log("connected to mongo DB"))
    .catch((err)=>console.log(`could not connect to mongo db ${err}`));