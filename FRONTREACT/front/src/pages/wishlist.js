import NavBar from "../components/navbar"
import Footer from "../components/footer";
import { Outlet } from 'react-router-dom';
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
function Wishlist (){
    const [wishlists, setWishlist] = useState([]); 

    useEffect(() => {
        const fetchwishlists = async () => {
            
            let dProduit = await axios.get("http://localhost:9000/api/wishlist/");
            setWishlist(dProduit.data.wishlists)
        }
        fetchwishlists();

      },[])

      
       useEffect(() => {
        if (wishlists.length > 0) {
            console.log("fetch done")
        }
        }, [wishlists])

      
      
    const deleteWishlist = async(WishlistId)=>{
        try{
        const dwishlist = await axios.delete("http://localhost:9000/api/wishlist/delete/",{ data: { id: WishlistId } });
        
        console.log(dwishlist.status)
        }catch(e){
            console.log(e.message)
        }

    }
return(
    
        <>
        
        <section class="cart_area section_padding">
        <div class="container">
          <div class="cart_inner">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Price</th>
                    <th scope="col">prix</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                {wishlists !== undefined && wishlists !== null && wishlists.length > 0 &&
                wishlists.map((e) => {

                <tr >
                    <td>
                      <div class="media">
                        <div class="d-flex">
                          <img src="assets/img/gallery/card1.png" alt="" />
                        </div>
                        <div class="media-body">
                        <a>{e.produit}</a>
                        </div>
                      </div>
                    </td>
                    <td>
                    <a>{e.produit}DT</a>
                    </td>
                    
                    <td>
                      <h5>$720.00</h5>
                    </td>

                    <td>
                      <div class="cupon_text float-right">
                    <a class="btn_1" href="#" onClick={()=>deleteWishlist(e._id)}>delete from wishlist</a>
                        
                      </div>
                    </td>
                  </tr>
                    
                })
            
            }
                  
                </tbody>
              </table>
              
            </div>
        </div>
        </div>
            </section>
    </>
);
}
export default Wishlist;
