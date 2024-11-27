import React, { useState } from "react";
import Clothing from "./clothings";
import "./Styles/Read.css"
const Read=()=>{
    const [Product,setProduct]=useState("")
    const [SelectValue,setSelectValue]=useState("")
    const [ClothingProduct,setClothingProduct]=useState(Clothing)
    
    const GetProduct=(e)=>{
     setProduct(e.target.value)
     if(SelectValue=="Category"){
        let Table=Clothing.filter((ele)=>{
            return  ele.category.toLowerCase().includes(e.target.value.toLowerCase())
          })
          setClothingProduct(Table)
     }
     else if(SelectValue=="Title"){
        let Table=Clothing.filter((ele)=>{
            return  ele.title.toLowerCase().includes(e.target.value.toLowerCase())
          })
          setClothingProduct(Table)
     }
     else if(SelectValue=="Id"){
        let Table=Clothing.filter((ele)=>{
            return  ele.id==e.target.value
          })
          setClothingProduct(Table)
     }
     else if(SelectValue=="Price"){
        let Table=Clothing.filter((ele)=>{
            return  ele.price==e.target.value
          })
          setClothingProduct(Table)
     }else if(SelectValue=="Material"){
        let Table=Clothing.filter((ele)=>{
            return  ele.material.toLowerCase().includes(e.target.value.toLowerCase())
          })
          setClothingProduct(Table)
     }else if(!SelectValue || !e.target.value){
        setClothingProduct(Clothing)
     }
    }
    
    const ChangeFilter=(e)=>{
        setSelectValue(e.target.value)
    }
    return( 
        <div className="Read">
            <h1></h1>
            <h3>{ClothingProduct.length} PRODUCTS</h3>
            <div style={{display:"flex",alignItems:"center"}}>
            <select onChange={(e)=>ChangeFilter(e)}>
                <option value="">Filter By ..</option>
                <option value="Category">Filter By Category</option>
                <option value="Title">Filter By Title</option>
                <option value="Id">Filter By Id</option>
                <option value="Price">Filter By Price</option>
                <option value={"Material"}>Filter By Material</option>
            </select>
            <input onChange={(e)=>{GetProduct(e)}} type="text" className="GetProduct"></input>
            </div>
            <div>
                {
                 ClothingProduct.map((ele)=>(
                    <div className="ReadCard">
                        <div>
                        <div className="ReadImages">
                            {ele.images.map((ele)=>{
                                return <div className="ReadImage" style={{display:"flex"}}><img src={ele}></img></div>
                            })}
                        </div>
                        </div>
                        <h2>{ele.title}</h2>
                        <p className="para">{ele.description}</p>
                        <div className="info">
                            <span>category: {ele.category}</span>
                            <span>material: {ele.material}</span>
                            <span>price: {ele.price}</span>
                        </div>
                    </div>
                 ))
                }
            </div>
        </div>
    )
}
export default Read;