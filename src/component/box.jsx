import React from 'react';

class Box extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div style={{
            backgroundColor: `${this.props.color}`
          }} className="box">
          <button onClick={()=>{this.props.handleClick()}} className="change-color-btn">Change Color</button>
        </div>
      </div>
    )
  }
}

export default Box;