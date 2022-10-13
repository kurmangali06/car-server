import mongoose from "mongoose";


const typeSchema = new mongoose.Schema({
  type: {type:String, required: true}
}, {
  timestamps: true
})

const Category = mongoose.model('Category', typeSchema );

export default Category;