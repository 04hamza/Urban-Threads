import React, { useEffect, useState } from "react";
import Clothing from "./clothings";
import { useLocation } from "react-router-dom";
import "./Styles/Mycard.css";

const Mycard=()=>{
    const location=useLocation()
    const [Delete,setDelete]=useState(true)
    const OnclickDelete=()=>{
      setDelete(!Delete)
    }
    const {id,Price,color,size,amount}=location.state || {}
    const ProductAchat=Clothing.filter((el)=>{
       return el.id==id;
     })
     const Product=ProductAchat[0]
    return(
        <>
        <div className="MyCard">
          <div className="X">
          <h1>My Card</h1>{
            Delete && id ?<div className="infoCard">
            <div className="img">
              <img src={Product.images[0]}></img>
            </div>
            <div className="info">
                <h2>{Product.title}</h2>
                <div className="price">price   {Product.price}</div>
                <div className="color">color   {color}</div>
                <div className="size">size   {size}</div>
            </div>
            <div className="amoutprice">
              <div className="amout">{amount}</div>
              <div className="price">{Price}</div>
              <div onClick={()=>OnclickDelete()} className="delete"><svg xmlns="http://www.w3.org/2000/svg" className="x" width="25" height="25" fill="currentColor" class="bi bi-bookmark-x" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6.146 5.146a.5.5 0 0 1 .708 0L8 6.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 7l1.147 1.146a.5.5 0 0 1-.708.708L8 7.707 6.854 8.854a.5.5 0 1 1-.708-.708L7.293 7 6.146 5.854a.5.5 0 0 1 0-.708"/>
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                </svg></div>
            </div>
           </div>:""
          }
          </div>
          <div className="Order_Summary">
            <h1>Order Summary</h1>
            <div className="Subtotal"><span>Subtotal</span><span>{Delete?`${Price} $`:""}</span></div>
            <hr></hr>
            <div className="Estimated"><span>Estimated Total</span><span>{Delete?`${Price+0.5} $`:""}</span></div>
            <button>Order now</button>
            <div>
               Shipping fees and taxes are calculated once the shipping step is completed.
            </div>
          </div>
        </div>
        </>
    )
}
export  default Mycard;