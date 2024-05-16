import { useDispatch } from "react-redux"
import { useState } from "react"

import './form.css'

function Forms(){

   const dispatch=useDispatch()

    const[amt,Setamt]=useState("")
    const[flname,Setfull]=useState("")
    const[mob,SetMob]=useState(null)
   

    const onChangeinput=(event)=>{
        Setamt(event.target.value)
        
    }
    const onChangename=(event)=>{
      Setfull(event.target.value)
  
    }
    const onChangemob=(event)=>{
      SetMob(event.target.value)
      
    }
    
    return(
        <>
        <div className="logo">
        <div className="container">
        <h1>Forms</h1>
        <div className="row">
          <div className="col-4"> 
            <input className="form-control"  value={amt} onChange={onChangeinput} type="number" placeholder="Enter Ammount"/>
           
          </div>
          <button className="btn btn-primary col-1" onClick={()=>{
            dispatch({type:"deposit",payload:amt});
            Setamt("")
          }}>Deposit</button>
          <button className="btn btn-danger col-1 max-2"  onClick={()=>{
            dispatch({type:"withdraw",payload:amt});
            Setamt("")
          }}>withdraw</button>
          
        </div>
        <div className="row mt-2">
          <div className="col-4"> 
            <input className="form-control" value={flname} onChange={onChangename} type="text" placeholder="Enter Full Name"/>
           
          </div>
          <button className="btn btn-primary col-1" onClick={()=>{
            dispatch({type:"fullname",payload:flname});
            Setfull("")
          }}>Update</button>
        </div>

        <div className="row mt-2">
          <div className="col-4"> 
            <input className="form-control" value={mob} onChange={onChangemob} type="text" placeholder="Enter MobileNumber"/>
           
          </div>
          <button className="btn btn-primary col-1" onClick={()=>{
            dispatch({type:"mobilenum",payload:mob});
            SetMob("")
          }}>Update</button>
        </div>
        <div className="mt-2">
        <button className="btn btn-danger col-1" onClick={()=>{
          dispatch({type:"reset"})
        }}>Reset</button>
        </div>
      
        </div>
        </div>
        
        </>
    )
}
export default Forms