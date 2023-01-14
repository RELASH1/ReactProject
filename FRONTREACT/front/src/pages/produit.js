import NavBar from "../components/navbar"
import Footer from "../components/footer";
import { Outlet } from 'react-router-dom';
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
function Produit (){
    
    const [produits, setproduit] = useState([]); 
    const [categories, setHprod] = useState([]);
    const [expensiveProd, setexpensiveProd] = useState([]);
    const [lowProd, setlowProd] = useState([]);
    useEffect(() => {
        const fetchhpProduit = async () => {
            
            let dProduit = await axios.get("http://localhost:9000/api/categorie/");
            setHprod(dProduit.data.categories)
        }
        fetchhpProduit();
      }, [])
      useEffect(() => {
        if (categories.length > 0) {
            console.log("fetch done")
        }
    }, [categories])



    useEffect(() => {
        const fetchProduit = async () => {
            
            let dProduit = await axios.get("http://localhost:9000/api/produit/");
            setproduit(dProduit.data.produits)
        }
        fetchProduit();
      }, [])
      useEffect(() => {
        if (produits.length > 0) {
            console.log("fetch done")
        }
    }, [produits])


    useEffect(() => {
        const fetchExpensiveProd = async () => {
            
            let dProduit = await axios.get("http://localhost:9000/api/produit/show/63a4765bded33896da77e70b");
            setexpensiveProd(dProduit.data.produits)
        }
        fetchExpensiveProd();
      }, [])
      useEffect(() => {
        if (expensiveProd.length > 0) {
            console.log("fetch done")
        }
    }, [expensiveProd])

    useEffect(() => {
        const fetchLowProd = async () => {
            
            let dProduit = await axios.get("http://localhost:9000/api/produit/show/63a495b6b317afb1c4ecde58");
            setlowProd(dProduit.data.produits)
        }
        fetchLowProd();
      }, [])
      useEffect(() => {
        if (lowProd.length > 0) {
            console.log("fetch done")
        }
    }, [lowProd])

      
    

return(

    <>
    <div class="slider-area ">
            <div class="single-slider slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap text-center">
                                <h2>Watch Shop</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="popular-items latest-padding">
            <div class="container"> 
            {/* hedhom les categories*/}
                <div class="row product-btn justify-content-between mb-40">
                    <div class="properties__button">
                    <nav>                                                      
                              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">All</a>
                                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"> Highest Prices</a>
                                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"> Medium </a>
                            </div>
                        </nav>
                       
                        
                    </div>
                   
                    <div class="grid-list-view">
                    </div>
                    
                
                </div>
             
                <div class="tab-content" id="nav-tabContent">
                    
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div class="row">
                            {/* All product */}
                        {produits.map((prod)=>(
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div class="single-popular-items mb-50 text-center">
                                    <div class="popular-img">
                                        <img src="img/gallery/popular1.png" />
                                        <div class="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        <div class="favorit-items">
                                            <span class="flaticon-heart"></span>
                                        </div>
                                    </div>
                                    <div class="popular-caption">
                                        <h3><a href="product_details.html">{prod.name}</a></h3>
                                        <span>${prod.price}</span>
                                    </div>
                                </div>
                            </div>
                            
                        ))}
                        </div>
                    </div>
                    
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div class="row">
                        {/* product by category*/}
                        {expensiveProd.map((prod)=>(
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div class="single-popular-items mb-50 text-center">
                                    <div class="popular-img">
                                        <img src="img/gallery/popular1.png" />
                                        <div class="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        <div class="favorit-items">
                                            <span class="flaticon-heart"></span>
                                        </div>
                                    </div>
                                    <div class="popular-caption">
                                        <h3><a href="product_details.html">{prod.name}</a></h3>
                                        <span>${prod.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div class="row">
                        {/* product by category*/}
                        {lowProd.map((prod)=>(
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div class="single-popular-items mb-50 text-center">
                                    <div class="popular-img">
                                        <img src="img/gallery/popular1.png" />
                                        <div class="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        <div class="favorit-items">
                                            <span class="flaticon-heart"></span>
                                        </div>
                                    </div>
                                    <div class="popular-caption">
                                        <h3><a href="product_details.html">{prod.name}</a></h3>
                                        <span>${prod.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
       
    </>
);


}
export default Produit;