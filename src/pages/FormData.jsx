import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormData extends Component {
  render() {
    const {maSV, hoTen, sdt, email} = this.props.svSua;

    return (
        <form onSubmit={this.props.handleSubmit}> 
        <div className='card '>
            <h1 className='card-header text-white bg-dark text-center'> Thông tin sinh viên</h1>
            <div className="row">
                <div className="col-6" style={{padding: "1rem 2rem"}}>
                    <div className='mt-3'>
                        <label className='form-lable'>Mã SV:</label>
                        <input className='form-control' placeholder='Nhập mã Sinh Viên' id='maSV' name='Mã Sinh Viên' onChange ={this.props.handleOnchange} value={maSV}/>
                        <p className='text-danger'>{this.props.error.maSV}</p>
                    </div>
                    <div className='mt-3'>
                        <label className='form-lable'>Số Điện Thoại:</label>
                        <input className='form-control' placeholder='Nhập Số Điện Thoại' id='sdt' name='Số Điện Thoại' onChange ={this.props.handleOnchange} value={sdt}/>
                        <p className='text-danger'>{this.props.error.sdt}</p>
                    </div>
                    <button className='btn btn-success'>Thêm Sinh Viên</button>
                    
                </div>
                <div className="col-6" style={{padding: "1rem 2rem"}}>
                    <div className='mt-3'>
                        <label className='form-lable'>Email:</label>
                        <input className='form-control' placeholder='Nhập Email' id='email' name='Email'  onChange ={this.props.handleOnchange} value={email}/>
                        <p className='text-danger'>{this.props.error.email}</p>
                    </div>
                    <div className='mt-3'>
                        <label className='form-lable'>Họ và tên:</label>
                        <input className='form-control' placeholder='Nhập họ và tên' id='hoTen' name='Họ và Tên' onChange ={this.props.handleOnchange} value={hoTen}/>
                        <p className='text-danger'>{this.props.error.hoTen}</p>
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
        value: rootReducer.svReducer.value,
        error: rootReducer.svReducer.error,
        svSua: rootReducer.svReducer.svSua
    }
}

const mapDispatchToProps = (dispatch) => { 
    return {
        handleOnchange: (event) => { 
            const action = { 
                type: "ON_CHANGE",
                payload: event.target
            }
            
            dispatch(action)
        },
        handleSubmit: (event) => {
            event.preventDefault();
            const action = { 
                type: "THEM_NGUOI_DUNG",
                payload: event.target
            }
            
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FormData)