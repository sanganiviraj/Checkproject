export const Add_tailordetail = "ADD_TAILORDETAIL";
export const UPDATE_TAILOR_DETAIL = 'UPDATE_TAILOR_DETAIL';
export const Add_Customerdetail = "ADD_CUSTOMERDETAIL";



let Tailorid = 0;
let Customerid=0;

export const Add_tailor = (
   name,number,Types,
  ) => ({
    type: Add_tailordetail,
    Tailorlist: {
    Tailorid:++Tailorid,name,number,Types,
    },
  });
  export const Update_tailor = (Tailorid, name, number, Types) => ({
    type: UPDATE_TAILOR_DETAIL,
    Tailorlist: {
      Tailorid,
      name,
      number,
      Types,
    },
  });
  export const Add_Customer = (
    Customername, Customernumber,
    Shirt,Pants,Kurtas,Suits,
  ) => ({
    type: Add_Customerdetail,
    Customerlist: {
      Customerid: ++Customerid,
      Customername,
      Customernumber,
      Shirt: {
        shoulder: Shirt.shoulder,
        sleeves: Shirt.sleeves,
        chest: Shirt.chest,
        Length: Shirt.Length,
      },
      Pants: {
        Waist: Pants.Waist, 
        length: Pants.length,
        hip: Pants.hip,
        inseam: Pants.inseam,
      },
      Kurtas: {
        shoulder: Kurtas.shoulder,
        sleeves: Kurtas.sleeves,
        chest: Kurtas.chest,
        other: Kurtas.other,
      },
      Suits: {
        shoulder: Suits.shoulder,
        sleeves: Suits.sleeves,
        chest: Suits.chest,
        Length: Suits.Length, 
      },
    },
  });