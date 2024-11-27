import React, { useState } from "react";
import "./Styles/FilterByPrice.css"
const FilterByPrice=({TableClothings,setTableClothings})=>{
    const [active,setprice]=useState("")
    const FilterByPrice=(e,min,max)=>{
            const Table=TableClothings.filter((ele)=>{
                return ele.price > min && ele.price <max ;
            })
            setTableClothings(Table);
            setprice(e.target.id)
    }
    return(
        <div className="FilterByPrice">
         <h2>By Material</h2>
            <div id="1" className={`sizeddiv ${active === "1" ? "active" : ""}`} onClick={(e)=>FilterByPrice(e,10,20)}>10-20$</div>
            <div id="2" className={`sizeddiv ${active === "2" ? "active" : ""}`} onClick={(e)=>FilterByPrice(e,20,30)}>20-30$</div>
            <div id="3" className={`sizeddiv ${active === "3" ? "active" : ""}`} onClick={(e)=>FilterByPrice(e,30,40)}>30-40$</div>
            <div id="4" className={`sizeddiv ${active === "4" ? "active" : ""}`} onClick={(e)=>FilterByPrice(e,40,50)}>40-50$</div>
            <div id="5" className={`sizeddiv ${active === "5" ? "active" : ""}`} onClick={(e)=>FilterByPrice(e,50,60)}>50-60$</div>
            <div id="6" className={`sizeddiv ${active === "6" ? "active" : ""}`} onClick={(e)=>FilterByPrice(e,60,70)}>60-70$</div>
        </div>
    )
}
export default FilterByPrice;