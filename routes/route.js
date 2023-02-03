const express =require('express')
const router=express.Router()
const {ensureAuthenticated}=require('../config/auth')
const Recipe=require('../models/recipe')
const Like=require('../models/like')


router.get('/',(req,res)=>{
	res.render('welcome')
})

router.get('/dashboard', ensureAuthenticated, async (req, res) => {
    try {
        
        const recipes = await Recipe.find({ user: req.user._id }).sort({createdAt: -1});     
        const publicRecipes= await Recipe.find({ isPrivate: false }).sort({createdAt: -1}).populate('like','user_id')
        .populate({
        path: 'like',
        select: 'status user_id',
        populate: {
          path: 'user_id'
        }})
        .populate('user', 'name');
        for(var i = 0; i < publicRecipes.length; i++) {
          publicRecipes[i].userName = publicRecipes[i].user ? publicRecipes[i].user.name : 'Deleted User';
               publicRecipes[i].likeStatus = "Like";
               publicRecipes[i].likeStatuss="like-btn";
               for(var j = 0; j < publicRecipes[i].like.length; j++) {
                 if (publicRecipes[i].like[j].user_id && publicRecipes[i].like[j].user_id._id.toString() == req.user._id.toString()) {
                   publicRecipes[i].likeStatus = publicRecipes[i].like[j].status===true ? "Unlike" : "Like";
                   publicRecipes[i].likeStatuss = publicRecipes[i].like[j].status===true ? "unlike-btn" : "like-btn";

                   break;
                 }
               }
              // console.log("You should "+publicRecipes[i].likeStatus);
        }

        res.render('dashboard', {
            name: req.user.name,
            id: req.user._id,
            recipes: recipes,
            publicRecipes: publicRecipes
        
        });
    } catch (err) {
        console.log(err);
    }
});

module.exports=router
