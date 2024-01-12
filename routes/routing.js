const express=require('express')

const logic=require('../controllers/logic')

const router=new express.Router()


// signup

router.post('/tourist/userRegister',logic.register)

//login

router.post('/tourist/userLogin',logic.login)

//packages

router.post('/tourist/tourPackages',logic.packages)

//adminregister
router.post('/tourist/adminRegister',logic.adminRegister)

//admin
router.post('/tourist/adminLogin',logic.adminlogin)

//viewallpackage
router.get('/tourist/allPackage',logic.allPackage)

//single view
router.get('/tourist/singleview/:title',logic.singleview)

//edit
router.get('/tourist/edit/:title',logic.edit)

//doedit
router.post('/tourist/doedit/:title',logic.doedit)

//list
router.post('/tourist/booklist',logic.list)

//admin list
router.get('/tourist/adlist',logic.adlist)


router.delete('/tourist/delete/:title',logic.deletePack)

// router.post('/express/tower/package',logic.allPack)

module.exports=router