const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const recipeSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  isPrivate: {
    type: Boolean,
    required: true
  },
  like: [{
    type: ObjectId,
    ref: 'Like'
  }],
  recipename: {
    type: String,
    required:true
  },
  description:{
    type: String,
    required:true
  },
   preptime: {
    type: String,
    required:true
  },
   cooktime: {
    type: String,
    required:true
  },
   serving: {
    type: Number,
    required:true
  },
   difficulty: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    set: val => val.split(','),
    required: true
  },
  instructions: {
    type: [String],
    set: val => val.split('\n'),
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


module.exports=mongoose.model('Recipe', recipeSchema);