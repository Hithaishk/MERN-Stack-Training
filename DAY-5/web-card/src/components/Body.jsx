import React from "react"
import './Body.css';

const Body =() =>{
    return(
    <>
        <div class="container">
    <div class="table basic">
        <h2 class="head_tab">Single <br/> Web Hosting</h2>
        <p class="p">Ideal solution for beginers</p>
       
        <div class="price-section">
            <div class="price-area">
                <div class="inner-area">
                    <h3 class="text">₹</h3>
                    <h3 class="price">29<span class="mo">/mo</span></h3>
                </div>
            </div>
        </div>
        <div class="package-name"></div>
        <ul class="features">
            <div class="btn"><button>Add to Cart</button></div>
            <p class="aj_des">₹159/mo when you renew</p>
            <li>
                <p class="list-name">1 Website</p>
                <p class="icon check"><i class="fas fa-check"></i></p>
            </li>
            <li>
                <p class="list-name">~10000 Visits Monthly</p>
                <p class="icon check"><i class="fas fa-check"></i></p>
            </li>
            <li>
                <p class="list-name">30 GB SSD Storage</p>
                <p class="icon cross"><i class="fas fa-times"></i></p>
            </li>
            <li>
                <p class="list-name">100 GB Bandwidth</p>
                <p class="icon cross"><i class="fas fa-times"></i></p>
            </li>
        </ul>
        <div><h2>See all features<span class="icon cross"><i class="fas fa-angle-down"></i></span></h2></div>
    </div>

    <div class="table premium">
        <h2 class="head_tab">Premium <br/> Web Hosting</h2>
        <p class="p">Perfect package for Personal</p>
        <div class="ribbon"><span>Best Value</span></div>
       
        <div class="price-section">
            <div class="price-area">
                <div class="inner-area">
                    <h3 class="text">₹</h3>
                    <h3 class="price">59<span class="mo">/mo</span></h3>
                </div>
            </div>
        </div>
        <div class="package-name"></div>
        <ul class="features">
            <div class="btn"><button>Add to Cart</button></div>
            <p class="aj_des">₹199/mo when you renew</p>
            <li>
                <p class="list-name">50 Website</p>
                <p class="icon check"><i class="fas fa-check"></i></p>
            </li>
            <li>
                <p class="list-name">~25000 Visits Monthly</p>
                <p class="icon check"><i class="fas fa-check"></i></p>
            </li>
            <li>
                <p class="list-name">30 GB SSD Storage</p>
                <p class="icon cross"><i class="fas fa-times"></i></p>
            </li>
            <li>
                <p class="list-name">200 GB Bandwidth</p>
                <p class="icon cross"><i class="fas fa-times"></i></p>
            </li>
        </ul>
        <div><h2>See all features<span class="icon cross"><i class="fas fa-angle-down"></i></span></h2></div>
    </div>

    <div class="table ultimate">
        <h2 class="head_tab">Ultimate <br/> Web Hosting</h2>
        <p class="p">Perfect package for businesses</p>
       
        <div class="price-section">
            <div class="price-area">
                <div class="inner-area">
                    <h3 class="text">₹</h3>
                    <h3 class="price">29<span class="mo">/mo</span></h3>
                </div>
            </div>
        </div>
        <div class="package-name"></div>
        <ul class="features">
            <div class="btn"><button>Add to Cart</button></div>
            <p class="aj_des">₹159/mo when you renew</p>
            <li>
                <p class="list-name">1 Website</p>
                <p class="icon check"><i class="fas fa-check"></i></p>
            </li>
            <li>
                <p class="list-name">~10000 Visits Monthly</p>
                <p class="icon check"><i class="fas fa-check"></i></p>
            </li>
            <li>
                <p class="list-name">30 GB SSD Storage</p>
                <p class="icon cross"><i class="fas fa-times"></i></p>
            </li>
            <li>
                <p class="list-name">100 GB Bandwidth</p>
                <p class="icon cross"><i class="fas fa-times"></i></p>
            </li>
        </ul>
        <div><h2>See all features<span class="icon cross"><i class="fas fa-angle-down"></i></span></h2></div>
    </div>
   
    </div>

    </>
    );
};
export default Body;
