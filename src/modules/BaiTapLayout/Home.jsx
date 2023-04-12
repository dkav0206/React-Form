import React, { Component } from 'react'
import dataGlasses from './dataGlasses.json'
import Styles from './index.module.css'

const merge = (...rest) => {
  return rest.join(' ');
}


export default class Home extends Component {

  state = {
    img: "./glassesImage/Empty.png",
    title: "",
    desc: ""
  };

  renderGlasses = () => { 
    return dataGlasses.map((item, index) => { 
      return ((<button className='col-2 m-3' type='button' onClick={() => { 
        this.setState({img: dataGlasses[index].url, title: dataGlasses[index].name, desc: dataGlasses[index].desc});
      }}>
      <img src={require(`${item.url}`)} alt="" style={{width:'50%'}}/>
    </button>));
    })
    
    ;
  }


  render() {
    
    return (
      <div className={merge(Styles.backgroundImg)}>
        <h1 className={merge(Styles.primary_text)}>TRY GLASSES APP ONLINE</h1>
        <div className="container">
          <div className='row justify-content-around'>
            <div className={merge(Styles.avaImg, Styles.avaChange)}>
              <img src={require(`${this.state.img}`)}alt="" style={{width:'50%'}}/>
              <div className={merge(Styles.box)}>
                <h5>{this.state.title}</h5>
                <p>{this.state.desc}</p>
              </div>

            </div>
            <div className={merge(Styles.avaImg)}></div>
          </div>
          
          <div className={merge(Styles.glassesBox, 'row justify-content-center')}>
            {this.renderGlasses()}
          </div>
        </div>
      </div>
    )
  }
}
