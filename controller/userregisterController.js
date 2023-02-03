
//user model schema
const User=require('../models/user')
const bcrypt=require('bcryptjs')
const passport=require('passport')

const registerUser=async (req,res)=>{
	const{name,email,password,password2}=req.body
 	let errors=[]

 	//check if requireed fields
 	if(!name || !email || !password || !password2){
 		errors.push({msg:'Please  fill in al fields'})
 	}
 	//cehck passowrd match
 	if(password!==password2){
        errors.push({msg:'Password do not match'})
 	}
 	//check pass length
 	if(password.length<=7){
        errors.push({msg:'Password should be at least 8 characters'})
 	}
 	if(errors.length>0){
 		res.render('register',{
 			errors,
 			name,
 			email,
 			password,
 			password2
 		})
 	}else{
 		//validation
 		
 		User.findOne({email:email})
 		.then(user=>{
 			if(user){
 				//user exist
 				errors.push({msg:'Email is already registered'})
 				res.render('register',{
		 			errors,
		 			name,
		 			email,
		 			password,
		 			password2
		 		})
 			}else{
 				const newUser=new User({
 					name,
 					email,
 					password
 				})

 				// Generate a salt
				bcrypt.genSalt(10, function(err, salt) {
				  if (err) {
				    console.log(err);
				  } else {
				    // Hash the password using the salt
				    bcrypt.hash(newUser.password, salt, function(err, hash) {
				      if (err) {
				        console.log(err);
				      } else {
				        // Update the user object with the hashed password
				        newUser.password = hash;
				        // Save the user object to the database
				        newUser.save(function(err) {
				          if (err) {
				            console.log(err);
				          } else {
				          	req.flash('success_msg',"You are registered and now can login")
				          
				            res.redirect('/user/login')
				          }
				        });
				      }
				    });
				  }
				});
 			}
 		})
 	}
}

const loginUser=async (req,res,next)=>{
	passport.authenticate('local',{
		successRedirect:'/dashboard',
		failureRedirect:'/user/login',
		failureFlash:true
	})(req,res,next)

}



const logoutUser =async (req, res)=>{
  req.logout(function(err) {
    if (err) {
      // handle error
       res.send("An error occurred while logging out.");
    }
    req.session.destroy(function (err) {
      res.clearCookie('connect.sid');
      res.redirect('/user/login');
    });
  });
};


module.exports={
	registerUser,loginUser,logoutUser
}
