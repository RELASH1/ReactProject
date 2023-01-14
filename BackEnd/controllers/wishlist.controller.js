const wishlist = require("../models/wishlist.model");

module.exports.createWishlist= async (req,res) => {
    try {
        // get body content
        let { user,produit } = req.body
        let newWishlist = new wishlist({
            user: user ,
            produit: produit ,
        })
        let savedWishlist = await newWishlist.save();
        return res.status(200).json({
            success: true,
            wishlist: savedWishlist 
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.getAllWishlists = async (req,res) => {
    try {
        let Wishlists = await wishlist.find().populate();
        return res.status(200).json({
            success: true,
            Wishlists
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.deleteWishlist = async (req,res) => {
    try {
        let {WishlistId} = req.params;
        await wishlist.findByIdAndDelete(WishlistId);
        return res.status(200).json({
            success: true,
            message: "Wishlist deleted successfully."
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}




