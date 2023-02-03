
const LocalStrategy = require('passport-local').Strategy;
const mongoose= require('mongoose')
const bcrypt= require('bcryptjs')

//load user model schema
const User=require('../models/user')

module.exports=function(passport){
	passport.use(
		new LocalStrategy({usernameField:'email'}, (email, password, done) => {
			 User.findOne({ email: email })
			 	  .then(user => {
				   	if(!user){
				   		return done(null, false, { message: 'The email  is not registered.' });
				   	}
				   	//if email exist
				   	//match password
				   	bcrypt.compare(password, user.password, function(err, isMatch) {
					  if (err) throw err;
					  console.log(err)

					  if(isMatch){
					  	return done(null,user)
					  }else{
					  	return done(null,false,{message:'Password incorrect'})
					  }

					})

				  })
				  .catch(error => {
				    console.log(error);
				  })
		})
	)
	passport.serializeUser((user, done) => {
	  done(null, user.id);
	})

	passport.deserializeUser(function(id, done){
	  User.findById(id, (err,user)=>{
	  	 done(err, user);
	  })
	 
	})
}