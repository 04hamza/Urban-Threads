import React, { useEffect } from "react";
import Clothing from "./clothings";
import { useState } from "react";
import "./Styles/Read.css"
const Delete=()=>{
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
     else if(SelectValue=="Category"){
        let Table=Clothing.filter((ele)=>{
            return  ele.title.toLowerCase().includes(e.target.value.toLowerCase())
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
    const DeleteProduct=(id)=>{
       const Products=Clothing.filter((ele)=>{
        return  ele.id != id;
       })
       setClothingProduct(Products)
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
                        <div style={{display:"flex",justifyContent:"end"}}>
                        <svg onClick={()=>DeleteProduct(ele.id)}  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                       <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                       </svg></div>
                    </div>
                 ))
                }
            </div>
        </div>
    )
}
export default Delete;
