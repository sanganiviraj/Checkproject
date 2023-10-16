import { createStore } from 'redux';
import { Add_tailordetail,UPDATE_TAILOR_DETAIL,Add_Customerdetail } from './action';
import { LogBox } from 'react-native';

const initialState = {
  Tailordata: [],
  Customerdata:[],
};

const PersonReducer = (state = initialState, action) => {
  console.log(initialState);

  switch (action.type) {
    case Add_tailordetail: {
        const {
          Tailorid,
          name,
          number,
          Types,
        } = action.Tailorlist;
        return {
          ...state,
          Tailordata: [ 
            ...state.Tailordata,
            {
              Tailorid,
              name,
              number,
              Types,
            },
          ],
        };
      }
      case UPDATE_TAILOR_DETAIL: { 
        const { Tailorid, name, number, Types } = action.Tailorlist;
       
        const uIndex = state.Tailordata.findIndex((item) => item.Tailorid === Tailorid);
        if (uIndex === -1) {
        
          return state;
        }
       
        const updatedTailordata = [...state.Tailordata];
        updatedTailordata[uIndex] = {
          Tailorid,
          name,
          number,
          Types,
        };
        return {
          ...state,
          Tailordata: updatedTailordata,
        };
      }

      case Add_Customerdetail: {
        const {
          Customerid,
          Customername,
          Customernumber,
          Shirt: {
            shoulder: ShirtShoulder,
            sleeves: ShirtSleeves,
            chest: ShirtChest,
            Lenths: ShirtLength,
          },
          Pants: {
            waist: PantsWaist,
            length: PantsLength,
            hip: PantsHip,
            inseam: PantsInseam,
          },
          Kurtas: {
            shoulder: KurtasShoulder,
            sleeves: KurtasSleeves,
            chest: KurtasChest,
            other: KurtasOther,
          },
          Suits: {
            shoulder: SuitsShoulder,
            sleeves: SuitsSleeves,
            chest: SuitsChest,
            Lenths: SuitsLenths,
          },
        } = action.Customerlist;
      
        const newCustomer = {
          Customerid,
          Customername,
          Customernumber,
          Shirt: {
            shoulder: ShirtShoulder,
            sleeves: ShirtSleeves,
            chest: ShirtChest,
            Lenths: ShirtLength,
          },
          Pants: {
            waist: PantsWaist,
            length: PantsLength,
            hip: PantsHip,
            inseam: PantsInseam,
          },
          Kurtas: {
            shoulder: KurtasShoulder,
            sleeves: KurtasSleeves,
            chest: KurtasChest,
            other: KurtasOther,
          },
          Suits: {
            shoulder: SuitsShoulder,
            sleeves: SuitsSleeves,
            chest: SuitsChest,
            Lenths: SuitsLenths,
          },
        };
      
        return {
          ...state,
          Customerdata: [
            ...state.Customerdata,
            newCustomer
          ],
          
        };
       
      }; 
    default:
        return state;
    }
  
  };
  
  const Tailorstore = createStore(PersonReducer);
  
  export default Tailorstore;
  