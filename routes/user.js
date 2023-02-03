const express =require('express')
const router=express.Router()
const bcrypt=require('bcryptjs')
const passport=require('passport')
const {
	registerUser,loginUser,logoutUser
}=require('../controller/userregisterController')

//login page -  render the login.ejs file 
router.get('/login',(req,res)=>{
	res.render('login')
})
//register page -render the register.ejs file
router.get('/register',(req,res)=>{
	res.render('register')
})
//register handle
router.post('/register',registerUser)

//login handle
router.post('/login',loginUser)

//logout handle
router.get('/logout',logoutUser)


module.exports=router