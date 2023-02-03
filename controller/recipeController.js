
const Recipe=require('../models/recipe')
const User=require('../models/user')
//create a new recipe
const createRecipe=async (req,res)=>{
const {isPrivate,recipename,description, preptime,cooktime,serving,difficulty,ingredients,instructions}=req.body

    //add doc to db
	try{
		const recipes= await Recipe.create({user: req.user._id ,isPrivate,recipename,description,preptime,cooktime,serving,difficulty,ingredients,instructions})
		res.redirect('/dashboard')

	}catch(error){
		res.status(400).json({error: error.message})

	}
}
//get single recipe
const getRecipe=async (req, res) => {
  // Retrieve single the recipe by the user
  
    try{
	   const recipe = await Recipe.findOne({ _id: req.params.id, user: req.user._id });
		res.render('singlerecipe',{
			recipes:recipe

		})
	}catch(error){
		res.status(400).json({error: error.message})

	}
}

 
const deleteRecipe=async (req, res) => {
  // Retrieve single the recipe by the user
  
    try{
	   const recipe = await Recipe.deleteOne({ _id: req.params.id, user: req.user._id });
		res.redirect('/dashboard');

	}catch(error){
		res.status(400).json({error: error.message})

	}
}

 


module.exports={
  createRecipe,getRecipe,deleteRecipe
}
  