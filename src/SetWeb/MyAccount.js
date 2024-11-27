import React from "react";
import "./Styles/MyAccount.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const MyAccount=()=>{
    const [code]=useState("1234567890")
    const [Action,setAction]=useState("")
    const [modepass,setmodepass]=useState("")
    const [Incorect,setIncorect]=useState(false)
    const nav=useNavigate()

    const ChangeAction=(e)=>{
        setAction(e.target.value)
    }
    const ChangeModepass=(e)=>{
        setmodepass(e.target.value)
    }
    const CheckCode=(e)=>{
        e.preventDefault()
           if(code==modepass && Action){
                nav(`/Dashboard/${Action}`)
           }else{
              setIncorect(true)
           }
    }
    return(
        <>
        <div className="MyAccount">
          <div className="S1">
            <h1>Product Management Form</h1>
            <form onSubmit={(e)=>CheckCode(e)}>
                <select onChange={(e)=>ChangeAction(e)}>
                    <option value="">Select an Action</option>
                    <option value="create">Add Product</option>
                    <option value="read">View Product</option>
                    <option value="update">Update Product</option>
                    <option value="delete">Delete Product</option>
                </select>
                <label>PassWord</label>
                <input onChange={(e)=>ChangeModepass(e)} type="password"/>
                <button type="submit">Submit</button>
            </form>
          </div>
          <div className="S2">
          </div>
        </div>
        {Incorect?<div className="left">Incorrect password. Please try again.</div>:!Action?<div className="left">Please Choose a Action.</div>:""}
        </>
    )
}
export default MyAccount;