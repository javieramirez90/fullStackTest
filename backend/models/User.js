const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  name: String,
  apiQuestion: [
    {
      type: String,
    }
  ],
  apiAnswers: [
    {
      type: String
    }
  ],

//  recetas: [
//    {
//      type:Schema.Types.ObjectId,
//      ref: 'Recipe'
//    }
// ],
// carrito: 
//   {type: Schema.Types.ObjectId,
//     ref:'Carrito'
//   }
},{
 timestamps:{
   createdAt: 'created_at',
   updatedAt: 'updated_at'
 }
})


module.exports = mongoose.model('User', userSchema);
