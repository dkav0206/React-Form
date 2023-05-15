import React, { Component } from 'react'
import { connect } from 'react-redux'

class Table extends Component {

  render() {
   
    return (
        <div>
            <div className="d-flex my-4">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id= "searchSV"/>
                <button className="btn btn-outline-success" type="button" onClick={() => {
                    const value = document.getElementById("searchSV").value;
                    this.props.filter(value);
                }}>Search Name</button>
            </div>
            <table className='table'>
                <thead className='table-dark'>
                    <tr>
                        <th>Mã SV</th>
                        <th>Họ Tên</th>
                        <th>Số Điện Thoại</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.search.isSearch? this.props.search.map((nd) => { 
                        return (
                            <tr key={nd.maSV}>
                                <td>{nd.maSV}</td>
                                <td>{nd.hoTen}</td>
                                <td>{nd.sdt}</td>
                                <td>{nd.email}</td>  
                                <td>
                                    <button className='btn btn-primary mx-2' onClick={() => this.props.handleEditUser(nd)}>Sửa</button>
                                    <button className='btn btn-success' onClick={() => this.props.xoaSV(nd.maSV)}>Xóa</button>
                                </td>
                            </tr>
                        )
                    }): this.props.mangSV.map((nd) => { 
                        return (
                            <tr key={nd.maSV}>
                                <td>{nd.maSV}</td>
                                <td>{nd.hoTen}</td>
                                <td>{nd.sdt}</td>
                                <td>{nd.email}</td>  
                                <td>
                                    <button className='btn btn-primary mx-2' onClick={() => this.props.handleEditUser(nd)}>Sửa</button>
                                    <button className='btn btn-success' onClick={() => this.props.xoaSV(nd.maSV)}>Xóa</button>
                                </td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    )
  }
}

const mapStateToProps = (rootReducer) => { 
    return {
        mangSV: rootReducer.svReducer.mangSV,
        search: rootReducer.svReducer.search,
    }
}

const mapDispatchToProps = (dispatch) => { 
    return { 
        xoaSV: (maSV) => { 
            const action = { 
                type: "XOA_NGUOI_DUNG",
                payload: maSV
            }
            
            dispatch(action)
        },
        
        handleEditUser: (nd) => {
            const action = { 
                type: "SUA_NGUOI_DUNG",
                payload: nd
            }
            
            dispatch(action)
        },
        filter: (value) =>  {
            const action = { 
                type: "KIEM_NGUOI_DUNG",
                payload: value
            }
            
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)