
const express= require('express') 
const router=express.Router() 
const {
	createLike,deleteLike,countLike,toggleLike
}=require('../controller/likeController')


//POST new like
router.post('/newlike',createLike)

//POST toggle like
router.post('/newlikes',toggleLike)

//toggle like based on the recipe
router.post('/newlikes/:recipe_id',toggleLike)

//COUNT like
router.get('/countlike/:recipe_id',countLike)


//DELETE like 
router.delete('/delete/:recipe_id', deleteLike);


module.exports=router
