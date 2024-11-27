import React from "react";
import { useParams } from "react-router-dom";
import Clothing from "./clothings";
import { useState , useEffect} from "react";
import FilterByPrice from "./FilterByPrice";
import FilterBySize from "./FilterBySize";
import FilterByMaterial from "./FilterByMaterial";
import "./Styles/Afficher.css";
import {useNavigate } from "react-router-dom";

const  Afficher=()=>{
    const [TableClothings,setTableClothings]=useState([])
    const [TableClothingsAfficher,setTableClothingsAfficher]=useState([])
    const {category}=useParams();
    const [MaskFilter,setMaskFilter]=useState(true)
    const [ImageMain,setImageMain]=useState([])
    const [sizes,setSises]=useState([])
    const [material,setMaterial]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
        const Table = Clothing.filter((ele) => ele.category === category);
        setTableClothings(Table);
        setTableClothingsAfficher(Table)
        setImageMain(Table.map((ele) => ele.images[0]));
        let TableMaterial=[... new Set(Table.map((ele)=>(ele.material)))]
        setMaterial(TableMaterial)
        let TableSize=[]
        Table.forEach((ele)=>{
            ele.size.forEach((ele)=>{
                if(!TableSize.includes(ele)){
                    TableSize.push(ele)
                }
            })
        })
        setSises(TableSize)
      }, [category]);

      useEffect(()=>{
        setImageMain(TableClothingsAfficher.map((ele) => ele.images[0]));
      }, [TableClothingsAfficher]);

    const Mask=()=>{
        setMaskFilter(!MaskFilter)
    }
    const Orderfunction=(e)=>{
        const TableFilter=[...TableClothingsAfficher]
        const TableOrder=[];
        if(e.target.value==="lower"){
            while(TableOrder.length<TableClothingsAfficher.length){
            let lower=TableFilter[0];
            for(let i=0;i<TableFilter.length;i++){
                if(lower.price>TableFilter[i].price){
                     lower=TableFilter[i];
                }
            }
            TableOrder.push(lower);
            TableFilter.splice(TableFilter.indexOf(lower),1)
        }
        setTableClothingsAfficher(TableOrder)
        }else if(e.target.value==="high"){
            while(TableOrder.length<TableClothingsAfficher.length){
                let High=TableFilter[0];
                for(let i=0;i<TableFilter.length;i++){
                    if(High.price<TableFilter[i].price){
                         High=TableFilter[i];
                    }
                }
                TableOrder.push(High);
                TableFilter.splice(TableFilter.indexOf(High),1)
            }
            setTableClothingsAfficher(TableOrder)
        }
    }
    const ChangePhoto=(index,tndex)=>{
           const Table=[...ImageMain]
           Table[index]=TableClothingsAfficher[index].images[tndex]
           setImageMain(Table)
    }
    const ClickOn=(e)=>{
        let id=e.target.id;
        let category=e.target.name;
        navigate(`/category/${category}/${id}`,{state:{id:id,category:category}})
    }


    return(
        <div className="Afficher">
        <h1>{category}</h1>
        <div className="bordinfo">
            <div onClick={Mask} className="ele1">MASQUER LES FILTER</div>
            <div style={{display:"flex"}}>
            <div className="ele2">{`${TableClothingsAfficher.length} PRODUCTS`}</div>
                <select onChange={Orderfunction} className="ele3">
                   <option >Order By</option>
                   <option value="lower">The Lowest Price</option>
                   <option value="high">The Highest Price</option>
                </select>
            </div>
        </div>
        <div className="divmain">
              {MaskFilter?<div className="filter">
                  <FilterByPrice TableClothings={TableClothings} setTableClothings={setTableClothingsAfficher}/>
                  <FilterBySize sizes={sizes} TableClothings={TableClothings} setTableClothings={setTableClothingsAfficher}/>
                  <FilterByMaterial material={material} TableClothings={TableClothings} setTableClothings={setTableClothingsAfficher}/>
              </div>:""}
              <div className="Products">
                {TableClothingsAfficher.map((ele,index)=>{
                    return(
                        <div className="Product" key={index}>
                            <div className="img"><img onClick={(e)=>ClickOn(e)} id={ele.id} name={ele.category} src={ImageMain[index]}/></div>
                            <div className="imgs">
                                {ele.images.map((ele,tndex)=>{
                                    return(
                                      <div><img key={index} onMouseEnter={()=>{ChangePhoto(index,tndex)}} src={ele}></img></div>
                                    )
                                })}
                            </div>
                            <div className="info">
                                <div className="prix">{`${ele.price} $`}</div>
                                <div className="title">{ele.title}</div>
                            </div>
                        </div>
                    )
                })}
              </div>
        </div>
        </div>
    )
}
export default Afficher;