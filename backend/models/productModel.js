import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {type: String, required:true},
    description: {type: String, required:true},
    price: {typer:Number, required:true},
    image: {typer:Array, required:true},
    category: {type:String, required:true},
    subCategory:{type:String, required:true},
    sizes:{typer:Array, required:true},
    bestseller:{type: Boolean},
    date:{type:Number, required:true}
})

const productModel = mongoose.models.product ||mongoose.model("product",productSchema)

export default productModel