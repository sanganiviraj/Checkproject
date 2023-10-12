import { Add_tailer, Invoice_detail, Update_tailor } from "./actions"
import { createStore } from "@reduxjs/toolkit"

const initialState = {
    Tailordata : [],
    Invoicedata: []
}

 const Tailerreducer = (state = initialState,action) =>{
    switch(action.type){
        case Add_tailer:{
            const {fullname,age,mobilenumber,clothetype,tid} = action.Tailorlist
            return{
                ...state,
                Tailordata :[...state.Tailordata,{fullname,age,mobilenumber,clothetype,tid}]
            }
        };

        case Update_tailor:{
            const {tid,fullname,age,mobilenumber,clothetype} = action.UpdateTailerlist;

            const tindex = state.Tailordata.findIndex((item) => item.tid == tid);
            
            console.log('tindex : ' ,tindex);
            if(tindex == -1){
                return state;
            }

            const updatedata = [...state.Tailordata];
            updatedata[tindex] = {tid,fullname,age,mobilenumber,clothetype}

            console.log('updatedata  : ' , updatedata);
            return{
                ...state,
                Tailordata : updatedata
            }
        }

        case Invoice_detail : {
            const {customername,customernumber,customfit,value,dropid, invoiceid} = action.invoiceitemlist;
            
            return{
                ...state,
                Invoicedata : [...state.Invoicedata , {customername,customernumber,customfit,value,dropid, invoiceid }]
            }
        }

        default:
        return state;
    }

    
}

const Tailorstore = createStore(Tailerreducer);

export default Tailorstore;