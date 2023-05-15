import {combineReducers, createStore} from 'redux';

const stateDefault = {
    mangSV: [
      {
        maSV: "1", 
        sdt: "0321032103", 
        hoTen:"coewqeqwncawqwqek", 
        email:"nguyenvan@gmail.com",
      }
    ],
    svSua: { 

    },
    search: [],
    
  }



const rootReducer = combineReducers({
    svReducer: (state = stateDefault, action) =>{
        switch (action.type){
            // case "ON_CHANGE": {
            //   const {id, name, value} = action.payload;
              
            //   const newValue = {...state.value};
            //   newValue[id] = value;
            //   const newError = {...state.error};
            //   let mssError = ''

            //   if (value === ""){ 
            //       mssError = name + ' Không được bỏ trống'
            //   }

            //   if(id === 'email'){
            //       const regrexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
            //       if (regrexEmail.test(value) === false) { 
            //           mssError = "Email không hợp lệ"
            //       }
            //   } else if (id === 'sdt'){
            //       const regrexSdt = /^\d+$/;
            //       if (regrexSdt.test(value) === false) { 
            //           mssError = "Số điện thoại không hợp lệ"
            //       }
            //   }
            //   newError[id] = mssError

            //   state.error = newError
            //   state.value = newValue
            //   return {...state}
            // }
            case "THEM_NGUOI_DUNG":{
              const idTonTai= state.mangSV.find((item) => item.maSV === action.payload.maSV);
              const emailTontai = state.mangSV.find((item) => item.email === action.payload.email);
              if (idTonTai){
                  alert("Mã Sinh Viên đã tồn tại");
              } else if (emailTontai){ 
                  alert("Email đã tồn tại");
              } else { 
                state.mangSV = [...state.mangSV, action.payload];
              }


            return {...state}; 
            }
            case "XOA_NGUOI_DUNG":{
              const mangSVmoi = state.mangSV.filter((sv) => sv.maSV !== action.payload);
              state.mangSV = mangSVmoi;
              
              return {...state}
            }
            case "SUA_NGUOI_DUNG":{
              state.svSua = action.payload;
              return {...state}
            }
            case "CAP_NHAP_NGUOI_DUNG": { 
              let svCanUpdate = state.mangSV.findIndex((sv) => sv.maSV === action.payload.maSV);
              const newSv = [...state.mangSV]
              if (svCanUpdate !== -1){
                newSv[svCanUpdate] = action.payload
              }

              state.mangSV = newSv;

              return {...state}
            }
            case "RESET": { 
              state.svSua = {};
              return {...state}
            }
            case "KIEM_NGUOI_DUNG": {
              state.search = state.mangSV.filter((sv) => sv.hoTen.toLowerCase().includes(action.payload.toLowerCase()));
              state.search.isSearch = true;
              return {...state}
            }
            default:
                return state
        }
    }

})


export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.
    __REDUX_DEVTOOLS_EXTENSION__()
    );