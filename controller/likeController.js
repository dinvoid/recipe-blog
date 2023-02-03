const {ObjectId } = require('mongodb')
const Like=require('../models/like')
const Recipe=require('../models/recipe')
const createLike=async (req,res)=>{
   try {
           const { recipe_id } = req.body;
           const like = new Like({
               recipe_id,
               user_id: req.user._id
           });
           await like.save();
           if (ObjectId.isValid(recipe_id)) {
            const recipe = await Recipe.findByIdAndUpdate(recipe_id, { $push: { like: like._id } },{new: true});
               res.json({ success: true });
           } else {
               res.json({ success: false, message: "Invalid recipe id" });
           }
       } catch (err) {
           console.log(err);
          // res.json({ success: false });
       }
    
}

const deleteLike = async (req, res) => {
   try{
      const {recipe_id}=req.params
      const like=await Like.findOneAndDelete({ recipe_id: recipe_id });
       return res.json({ success: true });
      } catch (error) {
          return res.status(500).json({ error: error.message });
      }

}
const countLike=async(req,res)=>{
   try {
          const {recipe_id}=req.params
          const count = await Like.countDocuments({ recipe_id: recipe_id });
          res.status(200).json({ count });
       } catch (error) {
          return res.status(500).json({ error: error.message });
      }
}
const toggleLike=async(req,res)=>{
        const { recipe_id } = req.body;
         if (!ObjectId.isValid(recipe_id)){
           return res.status(400).send({
            message:'Invalid recipe ID',
            data :{}
           })
         }
         Recipe.findOne({recipe_id: recipe_id }).then(async(recipe)=>{
            if(!recipe){
              return res.status(400).send({
                 message:'NO RECIPE FOUND',
                 data :{}
              });
            }else{
              Like.findOne({
                 recipe_id: recipe_id,
                 user_id: req.user._id
              }).then(async(recipelike)=>{
                try{
                   if(!recipelike){
                   const newlike = new Like({
                       recipe_id,
                       user_id: req.user._id
                   });
                   const likeRecipe=await newlike.save();
                   await Recipe.updateOne({
                       _id:recipe_id
                   },{
                       $push: { like: newlike._id }
                   });
                    return res.status(200).send({
                       message:'Like success added',
                       data :{}
                   });
                 }else{
                   await Like.deleteOne({ 
                       _id: recipelike._id });

                   await Recipe.updateOne({
                       _id:recipelike.recipe_id
                   },{
                       $pull: { like: recipelike._id }
                   });
                    return res.status(200).send({
                       message:'remove like',
                       data :{}
                   });

                 }
                }
                catch(err){
                     return res.status(400).send({
                     message: err.message,
                     data: err
                  })
                }
                
              }).catch((err)=>{
                   return res.status(400).send({
                   message: err.message,
                   data: err
                })
              })
            }
         }).catch((err)=>{
             return res.status(400).send({
             message: err.message,
             data: err
          })
         });
}

module.exports={
  createLike,deleteLike,countLike,toggleLike
}
  