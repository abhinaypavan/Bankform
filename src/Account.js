import { useSelector } from "react-redux"
import './form.css'

function Account(){
    const data=useSelector((state)=>{
return state
    })
    return(
        <>
        <div className="logo">

       
        <div className="container"> 
            <h1 className="text-primary">Account details</h1>

<table className="table table-bordered w-50">
    <thead>
        <tr>
            <th>
                Balance
            </th>
            <th>username</th>
            <th>Mobilenumber</th>
        </tr>
    </thead>
    <tbody>
        <th>{data.balance}</th>
        <th>{data.fullname}</th>
        <th>{data.mobilenum}</th>
    </tbody>
    </table>        </div>
    </div>
        </>
    )
}
export default Account