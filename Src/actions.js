export const Add_tailer = 'ADDING_TAILERDETAIL';

let tid = 0;

export const Add_Tailerdata = (firstname,secondname,age,mobilenumber,clothetype,tid) => ({
    type:Add_tailer,
    Tailorlist:{
        firstname,secondname,age,mobilenumber,clothetype,tid
    }
})