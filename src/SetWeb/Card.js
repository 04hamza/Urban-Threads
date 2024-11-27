import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Clothing from "./clothings";
import "./Styles/Card.css";
import { useState } from "react";
import Reviews from "./Reviews";

const Card=()=>{
    const {id,category}=useLocation().state;
    const nav=useNavigate()
    const CardProduct=Clothing[id-1]
    const [amount,setAmount]=useState(1)
    const [color,Setcolor]=useState(CardProduct.color[0])
    const [size,Setsize]=useState(CardProduct.size[0])
    const [image,setImage]=useState(CardProduct.images[0])
    const [forProduct,setForProduct]=useState("BENEFITS")
    const ChangeColor=(e)=>{
      Setcolor(e.target.style.backgroundColor)
    }
    const ChangeSize=(e)=>{
      Setsize(e.target.id)
    }
    const Delete=()=>{
      if(amount>1){
        setAmount(amount-1)
      }
    }
    const Add=()=>{
      setAmount(amount+1)
    }
    const ChangeForProduct=(e)=>{
       setForProduct(e.target.id)
    }
    const ChangeImage=(e)=>{
      setImage(e.target.src)
    }
    const AddToCart=(e)=>{
      e.preventDefault()
      const Price=amount*CardProduct.price
      nav(`/My Cart`,{state:{id,Price,color,size,amount}})
    }
    return(
      <>
        <div className="Card">
            <div className="image">
              <div className="mainimage">
                <img src={image}></img>
              </div>
              <div className="images">
                 {CardProduct.images.map((ele)=>(
                  <div>
                    <img onMouseEnter={(e)=>ChangeImage(e)} src={ele}></img>
                  </div>
                 ))}
              </div>
            </div>
            <div className="info">
               <h2>{CardProduct.title}</h2>
               <div className="prix">{CardProduct.price}</div>
               <form onSubmit={(e)=>AddToCart(e)}>
               <div className="Color">
                 <h3>Color</h3>
                  <div className="colors">{CardProduct.color.map((ele)=>(<div onClick={(e)=>ChangeColor(e)} className={ele==color?"colormain colordiv":"colordiv"} style={{backgroundColor:ele}} ></div>))}</div>
               </div>
               <div className="Size">
                 <h3>Size</h3>
                  <div className="sizes">{CardProduct.size.map((ele)=>(<div onClick={(e)=>ChangeSize(e)} id={ele} className={ele==size?"sizemain sizediv":"sizediv"}>{ele}</div>))}</div>
               </div>
               <h3 className="amount">Amount</h3>
               <div className="Number">
                         <div onClick={()=>Delete()} className="delete">-</div><div className="number">{amount}</div><div onClick={()=>Add()} className="add">+</div>
               </div>
                     <button type="submit">Add to Cart</button>
               </form>
               {CardProduct.availability?<div className="disponible">In-Store Availability</div>:<div className="disponible">Out of Stock in Store</div>}
               <hr></hr>
               <p className="description">
                  {CardProduct.description}
               </p>
            </div>
        </div>
        <div className="ForProduct">
        <div className={forProduct=="BENEFITS"?"choose":""} onClick={(e)=>ChangeForProduct(e)} id="BENEFITS">BENEFITS</div>
        <div className={forProduct=="TECHNICAL"?"choose":""} onClick={(e)=>ChangeForProduct(e)} id="TECHNICAL">TECHNICAL INFORMATION</div>
        <div className={forProduct=="REVIEWS"?"choose":""} onClick={(e)=>ChangeForProduct(e)} id="REVIEWS">REVIEWS</div>
        </div>
        {forProduct=="BENEFITS"?<div className="BENEFITS">
                                  <h2>BENEFITS</h2>
                                  <h3>Moisture-Wicking</h3>
                                  <p>Stay dry during your jog (and afterward) with fabric that wicks away sweat!</p>
                            </div>:forProduct=="TECHNICAL"?<div className="TECHNICAL">
                                  <h2>TECHNICAL INFORMATION</h2>
                                  <h3>Model Sizes</h3>
                                  <p>The models are wearing a size M and are 1.82m tall.</p>
                                  <h3>RUNNING IS ALSO ABOUT BREATHING</h3>
                                  <p>The synthetic fabric absorbs sweat and dries quickly, keeping you dry throughout your run.</p>
                                  <h3>Composition</h3>
                                  <p>Main fabric: 100% Polyester</p>
                                  </div>:<Reviews/>
                            }
        </>
    )
}
export default Card ;
