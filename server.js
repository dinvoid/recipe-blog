require('dotenv').config()
const routes=require('./routes/route')
const user=require('./routes/user')
const recipe=require('./routes/recipe')
const like=require('./routes/like')
const express=require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose=require('mongoose')
//connect-mongo

const PORT=process.env.PORT
const MONG_URI=process.env.MONG_URI

const flash = require('connect-flash')
const session = require('express-session')
const passport=require('passport')
const MongoStore = require('connect-mongo')


const app= express()
//passport config
require('./config/passport')(passport)
//connect to db
mongoose.set('strictQuery', true);
mongoose.connect(MONG_URI,{useNewUrlParser:true})
	.then(()=>{
	   //listen for request
      app.listen(PORT,()=>{
         console.log(`Connecting to db and Listening on port ${PORT}`)
      })

       })
    .catch((error)=>{
    	console.log(error)
	})

// Set the view engine to ejs
app.use(expressLayouts)
app.set('view engine', 'ejs')

//bodyparser
app.use(express.urlencoded({extended:false}))
//express
app.use(express.json())


//express session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
   store: MongoStore.create({
    mongoUrl: MONG_URI
   
  })

}));

//pasport middleware
app.use(passport.initialize())
app.use(passport.session())


//connect flash
app.use(flash())

// Set a flash message
app.use((req,res,next)=>{
	  res.locals.success_msg=req.flash('success_msg')
    res.locals.error_msg=req.flash('error_msg')
    res.locals.error=req.flash('error')
    next();

})


//routes
app.use('/',routes)
app.use('/user',user)
app.use('/recipe',recipe)
app.use('/like',like)

 