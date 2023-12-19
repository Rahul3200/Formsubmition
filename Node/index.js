const express = require('express');
const connect = require('./db/config')
const cors = require('cors')
const dotenv = require('dotenv');
const userRouter = require('./router/UserRouter')
const classRouter = require('./router/ClassRouter')
const paymentRouter = require('./router/PaymentRouter')

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/class', classRouter)
app.use('/api/payment', paymentRouter)

connect().then(()=> {
    try{
        app.listen(5000, ()=> {
            console.log(`Server is connected to http://localhost:${port}`)
        })
    }
    catch(err){
        console.log("Can't connect to the server. Some error occured while connecting to the server.")
    }

}).catch((err)=> {
    console.log(err)
    console.log("Invalid Database Connection")
})
