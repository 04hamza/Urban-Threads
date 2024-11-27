import React, { useState } from "react";
import "./Styles/FilterByPrice.css"
const FilterByMaterial=({material,TableClothings,setTableClothings})=>{
    const [active,setMate]=useState("")
    const FilterBymaterial=(material)=>{
            const Table =TableClothings.filter((ele)=>ele.material===material)
            setTableClothings(Table)
            setMate(material)
    }
    return(
        <div className="FilterByPrice">
         <h2>By Material</h2>
          {material.map((ele)=>(
            <div className={`sizeddiv ${active === ele ? "active" : ""}`} key={ele} onClick={()=>FilterBymaterial(ele)}>{ele}</div>
          ))}
        </div>
    )
}
export default FilterByMaterial;