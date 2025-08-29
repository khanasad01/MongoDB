const mongoose = require('mongoose')
const connectionString = 'mongodb://localhost:27017/Kalviumdb' 
mongoose.connect(connectionString,{
    userNewUrlparser: true,
    useUnifiedTopology:true,
})
.then (()=>{
    console.log("mongodb is running successfully")
})
.catch(err=>{
    console.log(err)
})