import React from "react";
import { Link } from "react-router-dom";
import Selection from "./Selection";
import "./Styles/Home.css"

const Home=()=>{
    return(
        <>
        <Selection/>
        <div className="Home">
            <div className="imageHome">
              <div className="divimgone"><Link to={"bestSelle"} className="textlink"><div className="text">Our Best Sellers</div><div className="button">Discovery</div></Link></div>
              <div className="divimgtwo"><img className="imgtwo" src="https://i.pinimg.com/736x/f8/a2/5e/f8a25e8a2bc2d03f8affe4a7e808f0bc.jpg"></img></div>
            </div>
            <div className="info">
            <h2>Why Choose Our Best Sellers?</h2>
             <p>
                Our best-selling products are handpicked by customers for their quality, style, and value. 
                Explore the latest trends, timeless classics, and top-rated items loved by everyone.
            </p>
           <ul>
                <li>Top-rated by customers</li>
               <li>Exclusive and trending designs</li>
               <li>Affordable pricing with premium quality</li>
           </ul>
            </div>
        </div>
        <div className="Home">
            <div className="info">
            <h2>Why Shop Our Selection Under 99?</h2>
          <p>
           Discover incredible value without compromising on quality. 
           Our selection under 99 offers stylish, practical, and affordable items handpicked just for you.
          </p>
     <ul>
    <li>Unbeatable prices under $99</li>
    <li>High-quality products you’ll love</li>
    <li>Perfect for gifting or treating yourself</li>
   </ul>
          </div>
          <div className="imageHome">
              <div className="divimgoneone"><Link to={"bestSelle"} className="textlink"><div className="text">Our Selection Under 99</div><div className="button">Discovery</div></Link></div>
              <div className="divimgtwotwo"><img className="imgtwo" src="https://i.pinimg.com/736x/20/19/8e/20198ebab227b4e85b45ad831ee5e024.jpg"></img></div>
            </div>
        </div>
    </>
 )
}
export default Home;

