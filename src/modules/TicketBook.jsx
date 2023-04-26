import React, { Component } from 'react'
import { connect } from 'react-redux';

class TicketBook extends Component {
  render() {
    const {data} = this.props;
    return (
      <div>
        <h2 className='mb-4' style={{color:"white"}}>DANH SÁCH GHẾ BẠN CHỌN</h2>
        <div className=" mb-4 gheList text-start">
            <div className="d-flex mb-2" style={{color:"white"}}>
                <div className="gheDuocChon me-2"></div>
                <h5 className='mt-1'>Ghế đã đặt</h5>
            </div>
            <div className="d-flex mb-2" style={{color:"white"}}>
                <div className="gheDangChon me-2"></div>
                <h5 className='mt-1'>Ghế đang chọn</h5>
            </div>
            <div className="d-flex mb-2" style={{color:"white"}}>
                <div className="ghe me-2"></div>
                <h5 className='mt-1'>Ghế chưa đặt</h5>
            </div>
        </div>

        <div className='mb-1 d-flex text-white justify-content-start'>
            <h5 className='me-4 mt-1'>Họ và tên:</h5>
            <input id="nameInput" type="text" placeholder='Nhập tên' onChange={() => {
                document.getElementById("Name").innerHTML = "Tên: " + document.getElementById("nameInput").value
            }}/>
        </div>  

        <table className='table text-white'>
            <thead>
                <tr>
                    <th>Số ghế</th>
                    <th>Giá</th>
                    <th>Hủy</th>
                </tr>
            </thead>
            <tbody>
                {data[0].gheDangChon.map((gheBook, index) => { 
                    return(
                        <tr className='text-yellow' key={index}>
                            <td>{gheBook.soGhe}</td>
                            <td>{gheBook.gia}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => { 
                                    this.props.deleteByID(gheBook.soGhe);
                                }}>X</button>
                            </td>
                            
                        </tr>
                    )
                })}
                
                <tr>
                <td>Tổng Tiền</td>
                    <td className='text-yellow'>{data[0].gheDangChon.reduce((sum, item) => { 
                        return sum + item.gia;
                    }, 0)}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>


        <div className='ms-2 mb-2 thanh-toan text-white text-start'>
            <h5 id='Name'>Tên: </h5>
            <div className='d-flex'>
                <button className='btn btn-success me-3' onClick={() => { 
                    if (document.getElementById("nameInput").value === null || document.getElementById("nameInput").value === ""){
                        alert("Xin vui lòng nhập tên");
                    } else { 
                        this.props.pay()
                        document.getElementById("Name").innerHTML = "Tên: ";
                        document.getElementById("nameInput").value = "";
                        alert("Bạn đã thành công");
                    }
                    
                
                }}>Thanh toán</button>
                <button className='btn btn-danger' onClick={() => {
                    document.getElementById("Name").innerHTML = "Tên: ";
                    document.getElementById("nameInput").value = "";
                    this.props.deleteAll()}}>Hủy</button>
            </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => { 
    return { 
        deleteAll: () => { 
            const action = {
                type: "XOA_HET",
                payload: ""
            }

            dispatch(action)
        },
        deleteByID: (soGhe) => { 
            const action = {
                type: "XOA",
                payload: soGhe
            }

            dispatch(action)
        },
        pay: () => { 
            const action = {
                type: "PAY",
                payload: ""
            }

            dispatch(action)
        }
    }
}

const mapStateToProps = (rootReducer) => {
    return{
        data: rootReducer.cinemaReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketBook)

