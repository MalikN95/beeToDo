const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes var
const homeRoutes = require('./routes/home.routes')


//Routes
app.use('/', homeRoutes)

const PORT = process.env.PORT || 4000

async function start(){
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        app.listen(PORT, () => {
            console.log(`Server started on ${PORT} PORT`);
        })
    } catch(e){
        console.log(e);
    }

}

start()
