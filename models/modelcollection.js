const mongoose=require('mongoose')

//model for packages
const packages=new mongoose.model("packages",{
    common:String,
    badge:String,
    title:String,
    place:String,
    day:Number,
    dpalce:String,
    cost:Number,
    description:String,
    imageurl:String,
    latitude:Number,
    longitude:Number

})


//model for users
const users=new mongoose.model("users",{
   uname:String,
   psw:String,
   phone:Number,
   packages:[]
})

//model for loginadmins
const loginadmins=new mongoose.model("loginadmins",{
    adname:String,
    adpsw:String
   
})


//model for list
const booklists=new mongoose.model("booklists",{
    date:String,
    person:Number,
    cname:String,
    title:String

})
 
// const ref=new mongoose.model('ref',{
//     tourpackages:[]
// })

module.exports={packages,users,loginadmins,booklists}





