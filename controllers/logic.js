const { json, response } = require("express")
const models = require("../models/modelcollection")

//logic for signup

const register=(req,res)=>{
const uname=req.body.uname
const psw=req.body.psw
const phone=req.body.phone

models.users.findOne({uname}).then(user=>{
    if(user){
        res.status(401).send("user already exist") 
    }
    else{
        var newUser=new models.users({
            uname,
            psw,
            phone
        })

        newUser.save()

        res.status(200).json(newUser)   //instead of send() we use json() to convert js tojson and then send
    }
})

}

//login for user

const login=(req,res)=>{
    const {uname,psw}=req.body

    models.users.findOne({uname,psw}).then(user=>{
        if(user){
            res.status(200).json(user)
        }
        else{
            res.status(401).json("incorrect username or password")
        }
    })
}


//signup for admin

const adminRegister=(req,res)=>{
    const adname=req.body.adname
    const adpsw=req.body.adpsw
 
    
    models.loginadmins.findOne({adname}).then(admin=>{
        if(admin){
            res.status(401).send("admin already exist") 
        }
        else{
            var newAdmin=new models.loginadmins({
                adname,
                adpsw
                
            })
    
            newAdmin.save()
    
            res.status(200).json(newAdmin)   
        }
    })
    
    }




//login for admin

const adminlogin=(req,res)=>{
    const {adname,adpsw}=req.body

    models.loginadmins.findOne({adname,adpsw}).then(admin=>{
        if(admin){
            res.status(200).json(admin)
        }
        else{
            res.status(401).json("incorrect admin name or password")
        }
    })
}




//logic for packages

const packages=(req,res)=>{
    const {common,badge,title,place,day,dpalce,cost,description,imageurl,latitude,longitude}=req.body

    models.packages.findOne({title}).then(packages=>{
        if(packages){
            res.status(200).json("package already exist")
        }
        else{
            var newPackage = new models.packages({
                common,
                badge,
                title,
                place,
                day,
                dpalce,
                cost,
                description,
                imageurl,
                latitude,
                longitude
            })
    
            newPackage.save()
    
            res.status(200).json(newPackage)   
        }
    })
}


//logic for viewpackage

// const allPackage=(req,res)=>{
// const {packages}=req.body

// models.packages.find().then(common=>{
//     if(common){
//         res.status(200).json(packages)
//     }
//     else{
//         res.status(401).json("package is not available at the moment")
//     }
// })
// }

const allPackage = (req, res) => {
    models.packages.find().then((common) => {
      if (common) {
        res.status(200).json(common); // Return the data as JSON
      } else {
        res.status(401).json("Package is not available at the moment");
      }
    });
  };
  
const singleview=(req,res)=>{
    const {title}=req.params
    models.packages.findOne({title}).then(singlepackage=>{
        if(singlepackage){
            res.status(200).json(singlepackage)
        }
        else{
            res.status(401).json("Package is not available at the moment")
        }
    })
}


const edit=(req,res)=>{
    const {title}=req.params
    models.packages.findOne({title}).then(editpackage=>{
        if(editpackage){
            res.status(200).json(editpackage)
        }
        else{
            res.status(401).json("Package is not available at the moment")
        }
    })
}




const doedit=(req,res)=>{
    const {title}=req.params;
    const update=req.body;
    models.packages.findOneAndUpdate({title},{ $set: update},{new:true}).then(newpackage=>{
        if(newpackage){
            res.status(200).json(newpackage)
        }
        else{
            res.status(401).json("Package is not available at the moment")
        }
    })

}


const deletePack=(req,res)=>{
    const {title}=req.params
    models.packages.deleteOne({title}).then(pack=>{
        if(pack){
            res.status(200).json("Package deleted successfully")
        }
        else{
            res.status(401).json("package does not exist")
        }
    })
}


const list=(req,res)=>{
    const {date,person,cname,title}=req.body
    models.booklists.create().then(booklist=>{
        if(booklist){
            res.status(401).json("list already exist")
        }
        else{
            var newList=new models.booklists({
                date,
                person,
                cname,
                title
            })
            newList.save()

            res.status(200).json(newList)
        }
    })
}


//adfmin list
const adlist=(req,res)=>{
    models.booklists.find().then((adlist)=>{
        if (adlist){
            res.status(200).json(adlist)
        }
        else{
            res.status(401).json("not added in the list")
        }
    })
}
    






module.exports={register,login,packages,adminlogin,adminRegister,allPackage,singleview,edit,doedit,deletePack,list,adlist}