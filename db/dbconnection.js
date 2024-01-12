const mongoose=require('mongoose')

mongoose.connect(process.env.BASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then
(()=>{console.log("Connected to database")}).catch(()=>{
    console.log("mongo db connection error");
})