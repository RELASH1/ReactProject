const produit = require("../models/produit.model");
const { findById } = require("../models/user.model");

module.exports.createProduit = async (req,res) => {
    try {
        // get body content
        let { name,
            price,
            description,
            categorie,
            } = req.body
        let newProduit = new produit({
            name: name,
            price:price,
            description: description,
            categorie: categorie,
             
        })
        let savedProduit = await newProduit.save();
        return res.status(200).json({
            success: true,
            produit: savedProduit
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.getAllproduits = async (req,res) => {
    try {
        let produits = await produit.find().populate();
        return res.status(200).json({
            success: true,
            produits
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}

module.exports.findProduitsByCategorie = async (req,res) => {
    try {
        let {categorieId} = req.params;
        let getproduit= await produit.find({ categorie: categorieId}).populate('categorie')
        return res.status(200).json({
            success: true,
            produits: getproduit
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}