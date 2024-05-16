import { createStore } from "redux";

const Intialstate={
    balance:0,
    fullname:"",
    mobilenum:''
}
function Reducerdata(state=Intialstate,action){
    switch(action.type){
        case "deposit":
            return {...state,balance:state.balance + +action.payload};
        case "withdraw":
            return {...state,balance:state.balance-action.payload}
        case "fullname":
            return {...state,fullname:action.payload}
        case "mobilenum":
            return{...state,mobilenum:action.payload}
        case "reset":
            return Intialstate
        default:
            return state
    }

}


const store=createStore(Reducerdata)

export default store