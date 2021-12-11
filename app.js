const express  = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
// const PORT = 3000
const PORT = process.env.PORT || 3000;
const {mogoUrl} = require('./keys')


require('./Employee');
require('./BlockedEmployee');
require('./Client');
require('./BlockedClient');
require('./Vendor');
require('./BlockedVendors');
require('./UnVerifiedVendors');
require('./Service');
require('./BlockedService');
require('./Category');
require('./SubCategory');
require('./Complaint');



const requireToken = require('./reqToken')
const authRoutes = require('./routes/authroutes')
app.use(bodyParser.json())
app.use(authRoutes)

mongoose.connect(mogoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log("connected to mongo yeahh")
})

mongoose.connection.on('error',(err)=>{
    console.log("this is error",err)
})



app.get('/',requireToken,(req,res)=>{
    res.send({email:req.user.email})
})

// app.listen(PORT,()=>{
//     console.log("server running "+PORT)
// })
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});