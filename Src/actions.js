export const Add_tailer = 'ADDING_TAILERDETAIL';
export const Update_tailor = 'UPDATING_TAILORDETAIL';
export const Invoice_detail = 'INVOICE_DETAIL';

let tid = 0;
let invoiceid =0;

export const Add_Tailerdata = (fullname,age,mobilenumber,clothetype) => ({
    type:Add_tailer,
    Tailorlist:{
        fullname,age,mobilenumber,clothetype,tid:++tid
    }
})

export const update_Tailordata = (tid,fullname,age,mobilenumber,clothetype) => ({
    type:Update_tailor,
    UpdateTailerlist:{
        tid,fullname,age,mobilenumber,clothetype
    }
})

export const Invoice_item = (customername,customernumber,customfit,value,dropid) => ({
    type:Invoice_detail,
    invoiceitemlist : {
        customername,customernumber,customfit,value,dropid, invoiceid : ++invoiceid
    }
}) 

