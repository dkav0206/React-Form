import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormData extends Component {
    state = { 
        value:{
            maSV:"",
            hoTen:"",
            sdt:"",
            email:"",
        },
        error: { 
            maSV:"",
            hoTen:"",
            sdt:"",
            email:"",
        },
    }


    static getDerivedStateFromProps(newProps, currentState){ 
        if(currentState.value.maSV !== newProps.svSua.maSV){
            return {
                value: newProps.svSua,
            }
        }
        return null;
    }


    handleOnchange =(event) => { 
        const {id, name, className, value} = event.target;

        const newValue = {...this.state.value};
        newValue[id] = value;
        const newError = {...this.state.error};
        let mssError = ''
        if (value === ""){ 
            mssError = name + ' Không được bỏ trống'
        } 
        if(id === 'email'){
            const regrexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
            if (regrexEmail.test(value) === false) { 
                mssError = "Email không hợp lệ"
            }
        }else if (id === 'sdt'){
            const regrexSdt = /^\d+$/;
            if (regrexSdt.test(value) === false) { 
                mssError = "Số điện thoại không hợp lệ"
            }
        }

        newError[id] = mssError

        this.setState(
            {
                value: newValue,
                error: newError
            }
        )

    }

    handleSubmit = (event) => { 
        event.preventDefault();

        for (let keyValue in this.state.value){
            if (this.state.value[keyValue] === ''){
                console.log()
                alert("Bạn chưa nhập dữ liệu")
                return; 
            }
        }

        for (let keyError in this.state.error){
            if(this.state.error[keyError] !== ''){
                alert(this.state.error[keyError])
                return;
            }
        }

        const action = { 
            type: 'THEM_NGUOI_DUNG',
            payload: this.state.value
        }

        this.props.dispatch(action)

    }

  render() {
    const {maSV, hoTen, sdt, email} = this.state.value;

    return (
        <form id="myForm" onSubmit={this.handleSubmit}> 
        <div className='card '>
            <h1 className='card-header text-white bg-dark text-center'> Thông tin sinh viên</h1>
            <div className="row">
                <div className="col-6" style={{padding: "1rem 2rem"}}>
                    <div className='mt-3'>
                        <label className='form-lable'>Mã SV:</label>
                        <input className='form-control' placeholder='Nhập mã Sinh Viên' id='maSV' name='Mã Sinh Viên' onChange ={this.handleOnchange} value={maSV}/>
                        <p className='text-danger'>{this.state.error.maSV}</p>
                    </div>
                    <div className='mt-3'>
                        <label className='form-lable'>Số Điện Thoại:</label>
                        <input className='form-control' placeholder='Nhập Số Điện Thoại' id='sdt' name='Số Điện Thoại' onChange ={this.handleOnchange} value={sdt}/>
                        <p className='text-danger'>{this.state.error.sdt}</p>
                    </div>
                    <button className='btn btn-success'>Thêm Sinh Viên</button>
                    <button className='btn btn-danger mx-3' onClick={(e) => {
                        e.preventDefault();
                        this.props.dispatch({
                          type:"CAP_NHAP_NGUOI_DUNG",
                          payload: this.state.value
                    })}}>Sửa Sinh Viên</button>
                    <button className='btn btn-success' id="resetBTN" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("maSV").value ="";
                        document.getElementById("hoTen").value ="";
                        document.getElementById("sdt").value ="";
                        document.getElementById("email").value ="";
                        this.props.dispatch({
                            type:"RESET",
                            payload:""
                        })


                    }}>X</button>
                    
                </div>
                <div className="col-6" style={{padding: "1rem 2rem"}}>
                    <div className='mt-3'>
                        <label className='form-lable'>Email:</label>
                        <input className='form-control' placeholder='Nhập Email' id='email' name='Email'  onChange ={this.handleOnchange} value={email}/>
                        <p className='text-danger'>{this.state.error.email}</p>
                    </div>
                    <div className='mt-3'>
                        <label className='form-lable'>Họ và tên:</label>
                        <input className='form-control' placeholder='Nhập họ và tên' id='hoTen' name='Họ và Tên' onChange ={this.handleOnchange} value={hoTen}/>
                        <p className='text-danger'>{this.state.error.hoTen}</p>
                    </div>
                </div>
            </div>
        </div>
        </form>
    )
  }
}

const mapStateToProps = (rootReducer) => { 
    return {
        svSua: rootReducer.svReducer.svSua
    }
}

export default connect(mapStateToProps)(FormData)