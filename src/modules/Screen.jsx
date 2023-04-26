import React, { Component } from 'react'
import { connect } from 'react-redux'

class Screen extends Component {
  header = [{
    "hang": "", 
    "danhSachGhe": [
      {"soGhe":"1","gia":0},
      {"soGhe":"2","gia":0},
      {"soGhe":"3","gia":0},
      {"soGhe":"4","gia":0},
      {"soGhe":"5","gia":0},
      {"soGhe":"6","gia":0},
      {"soGhe":"7","gia":0},
      {"soGhe":"8","gia":0},
      {"soGhe":"9","gia":0},
      {"soGhe":"10","gia":0},
      {"soGhe":"11","gia":0},
      {"soGhe":"12","gia":0}
    ] 
  }]

  

  render() {
    const {data} = this.props;
    
    const check = (soGhe) => {
        return data[0].gheDangChon.some(e => e.soGhe === soGhe)
    }

    // const chonGhe = (soGhe, gia) => {
    //     const newState = [data[0].gheDangChon.push({soGhe,gia})]
    //     return this.setState(newState)
    // }

    return (
      <div>
        <h2 style={{color:"orange"}}>Đặt vé xem phim</h2>
        <div className='ScreenCinema'>
            <p clasName="mb-2" style={{color: "white"}}>Màn hình</p>
            <div className="d-flex justify-content-center">
                <div className='screen'>
                </div>
                
            </div>
            <table className='mt-1 table'>
                <thead>
                    {this.header.map((row, index) => { 
                        return(
                            <tr key={index}>
                                <td className='rowNumber'>{row.hang}</td>
                                {row.danhSachGhe.map((ghe) => {
                                    return(<td className='rowNumber' onClick={() =>{ 

                                    }}>{ghe.soGhe}
                                        </td>)
                                })}
                            </tr>
                        )
                    })}
                </thead>
                <tbody className=''>
                    {data[1].rapChieu.map((row, index) => {
                        return(<tr key={index}>
                            <td className='rowNumber'>{row.hang}</td>
                            {row.danhSachGhe.map((ghe) => {
                                return(<td>
                                    <button className={(ghe.daDat) ? "gheDuocChon" : (!ghe.daDat && check(ghe.soGhe, ghe.gia)) ? "gheDangChon" : "ghe"}
                                            onClick={() => { 
                                                 if (!check(ghe.soGhe, ghe.gia)){
                                                    this.props.chonGhe(ghe.soGhe, ghe.gia)
                                                 }
                                            }}>{ghe.soGhe}</button>
                                    </td>)
                            })}
                            
                        </tr>)
                    })} 
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => { 
    return { 
        chonGhe: (soGhe, gia) => { 
            const action = {
                type: "DANG_CHON",
                payload: {soGhe, gia}
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

export default connect(mapStateToProps, mapDispatchToProps)(Screen)

