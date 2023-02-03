const {ensureAuthenticated}=require('../config/auth')
const express= require('express') 
const router=express.Router() 
const {
	createRecipe,getRecipe,deleteRecipe
}=require('../controller/recipeController')

//POST new recipe
router.post('/createrecipe',createRecipe)


//GET single recipe
router.get('/:id',ensureAuthenticated,getRecipe)


//DELETE single recipe
router.get('/:id/delete',ensureAuthenticated,deleteRecipe)
//UPDATE RECIPE

module.exports=router
