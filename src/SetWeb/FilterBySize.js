import React, { useState } from "react";
import "./Styles/FilterByPrice.css"

const FilterBySize=({sizes,TableClothings,setTableClothings})=>{
    const [active,setActive]=useState("")
    const FilterBysize=(size)=>{
        const Table=TableClothings.filter(ele=>ele.size.includes(size))
        setTableClothings(Table)
        setActive(size)
    }
    return(
        <div className="FilterByPrice">
         <h2>By Size</h2>
          {sizes.map((ele)=>{
            return(
                <div className={`pricediv ${active === ele ? "active" : ""}`} key={ele} onClick={()=>FilterBysize(ele)}>{ele}</div>
            )
          })}
        </div>
    )
}
export default FilterBySize;