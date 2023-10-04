import { Add_tailer } from "./actions"
import { createStore } from "@reduxjs/toolkit"

const initialState = {
    Tailordata : []
}

export const Tailerreducer = (state = initialState,action) =>{
    switch(action.type){
        case Add_tailer:{
            const {firstname,secondname,age,mobilenumber,clothetype,tid} = action.Tailorlist
            return{
                ...state,
                Tailordata :[...state.Tailordata,{firstname,secondname,age,mobilenumber,clothetype,tid}]
            }
        }
    }
}

const Tailorstore = createStore(Tailerreducer);

export default Tailorstore;