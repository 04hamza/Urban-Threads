import React from "react";
import Clothing from "./clothings";
import "./Styles/Selection.css"
import { useNavigate } from "react-router-dom";

 const Selection=()=>{
    const Tableitems=[...Clothing]
    const Selectonitems=[];
    for(let i=0;i<6;i++){
        let index=Math.floor(Math.random()*Tableitems.length);
        while (["Chinos", "Jeans","Sneakers"].includes(Tableitems[index].category)){
         index=Math.floor(Math.random()*Tableitems.length);
        }
        Selectonitems.push(Tableitems[index]);
        Tableitems.splice(index,1)
    }
  const navigate=useNavigate();
  const ClickOn=(id,category)=>{
      navigate(`/category/${category}/${id}`,{state:{id:id,category:category}})
  }
    return(
    <div className="Selection">
       <h3>THE SELECTION OF THE MOMENT</h3>
       <div className="Selectiondiv">
         {Selectonitems.map((ele)=>(<div onClick={()=>ClickOn(ele.id,ele.category)}  className="Selectiondivs">
          <div className="divimg"><img src={ele.images[0]}/></div><span>{ele.title}</span>
          </div>))}
       </div>
    </div>)
 }
 export default Selection;