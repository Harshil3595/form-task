const express=require('express');
const connecToMongotDB = require('./db');
const detialsRoutes=require('./routes/detailsroutes')

const app=express();
app.use(express.json());

const port=3000;

connecToMongotDB();

app.use('/api/auth',detialsRoutes)

app.listen(port,()=>{
    console.log(`App is runnig on ${port}`)
})