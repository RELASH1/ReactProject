const WishlistController=require("../controllers/wishlist.controller") ;
const express = require("express") ; 
const router = express.Router() ;
router.post("/create",WishlistController.createWishlist) 
router.get("/",WishlistController.getAllWishlists)
router.delete("/delete/:WishlistId",WishlistController.deleteWishlist)
module.exports=router ;