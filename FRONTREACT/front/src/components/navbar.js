import { Link } from "react-router-dom";
function NavBar() {
    return ( 
    
    <div>
        <header>
        
        <div class="header-area">
            <div class="main-header header-sticky">
                <div class="container-fluid">
                    <div class="menu-wrapper">
                      
                        <div class="logo">
                            <a href="index.html"><img src="img/logo/logo.png" alt=""></img></a>
                        </div>
                        
                        <div class="main-menu d-none d-lg-block">
                            <nav>                                                
                                <ul id="navigation">  
                                    <li><Link to ={"/"} className="nav-link" >
                      home
                  </Link></li>
                                    <li><Link to ={"/produit"} className="nav-link" >
                      Produit
                  </Link></li>
                                    <li><Link to ={"/wishlist"} className="nav-link" >
                      Wishlist
                  </Link></li>
                                   
                                    
                                    
                                    <li><a href="contact.html">Logout</a></li>
                                </ul>
                            </nav>
                        </div>
                        
                        <div class="header-right">
                            <ul>
                                
                                <li> <a href="./UserDetail"><Link to ={"/UserDetail"} className="nav-link" ></Link><span class="flaticon-user"></span></a></li>
                                <li><a href="./wishlist"><Link to ={"/wishlist"} className="nav-link" ></Link><span class="flaticon-shopping-cart"></span> </a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="col-12">
                        <div class="mobile_menu d-block d-lg-none"></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
        </div>);

}
export default NavBar;