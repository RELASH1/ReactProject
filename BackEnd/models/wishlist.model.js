const mongoose =require ('mongoose')


const wishlistSchema = new mongoose.Schema({
    user : { 
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    produit :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"produit"
    }

})

module.exports = mongoose.model("wishlists",wishlistSchema);

