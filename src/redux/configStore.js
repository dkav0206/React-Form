import {combineReducers, createStore} from 'redux';

const stateDefault = {
    mangSV: [
      {
        maSV: "1", 
        sdt: "0321032103", 
        hoTen:"concak", 
        email:"nguyenvan@gmail.com",
      }
    ], 
    value:{
        maSV: "",
        hoTen: "",
        sdt:"",
        email:""
    },
    error: { 
        maSV: "",
        hoTen: "",
        sdt:"",
        email:""
    },
    svSua: { 

    }
  }



const rootReducer = combineReducers({
    svReducer: (state = stateDefault, action) =>{
        switch (action.type){
            case "ON_CHANGE": {
              const {id, name, value} = action.payload;
              
              const newValue = {...state.value};
              newValue[id] = value;
              const newError = {...state.error};
              let mssError = ''

              if (value === ""){ 
                  mssError = name + ' Không được bỏ trống'
              }

              if(id === 'email'){
                  const regrexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
                  if (regrexEmail.test(value) === false) { 
                      mssError = "Email không hợp lệ"
                  }
              } else if (id === 'sdt'){
                  const regrexSdt = /^\d+$/;
                  if (regrexSdt.test(value) === false) { 
                      mssError = "Số điện thoại không hợp lệ"
                  }
              }
              newError[id] = mssError

              state.error = newError
              console.log(newError)
              state.value = newValue
              console.log(newValue)
              return {...state}
            }
            case "THEM_NGUOI_DUNG":{

              for (let keyValue in state.value){
                  if (state.value[keyValue] === ''){
                      alert("Bạn chưa nhập dữ liệu")
                      return state; 
                  }
              }
              const idTonTai= state.mangSV.find((item) => item.maSV === state.value.maSV);
              const emailTontai = state.mangSV.find((item) => item.email === state.value.email);

              if (idTonTai){
                  alert("Mã Sinh Viên đã tồn tại");
                  return state; 
              } else if (emailTontai){
                  alert("Email đã tồn tại");
                  return state; 
              }

              //kiểm tra có error nào hay không
              for (let keyError in state.error){
                  if(state.error[keyError] !== ''){
                      alert(state.error[keyError])
                      return state;
                  }
              }


              state.mangSV = [...state.mangSV, state.value];
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