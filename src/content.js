import React from 'react';

export default class Content extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      justifyDirection: 'right',
    }
    this.handleAddContentClick = this.handleAddContentClick.bind(this);
    this.handleChangeDirectionClick = this.handleChangeDirectionClick.bind(this);
    this.handleJustifyClick = this.handleJustifyClick.bind(this);
  }
  componentDidMount(){

  }
  handleAddContentClick(){
    let addContent = document.createElement('div');
    let addText = document.createTextNode('Content');
    addContent.appendChild(addText);
    addContent.classList.add('orange-box');
    let playground = document.getElementById('playground');
    playground.appendChild(addContent);
  }

  handleChangeDirectionClick(dir){
    let playground = document.getElementById('playground');
    if (playground.style.flexDirection === 'column'){
      playground.style.flexDirection = 'row';
    } else{
      playground.style.flexDirection = 'column';
    }
  }
  
  handleJustifyClick(alignment){
    const playground = document.getElementById('playground');
    playground.style.justifyContent = alignment;
  }

  render(){
    // const classSettings = document.getElementsByClassName('orange-box');
    // const style = window.getComputedStyle(classSettings[0]);
    // console.log(style);
    return(
      <div id="content">
        <div id="playground">
          <div className="orange-box">Content</div>
        </div>
        <div id="user-control">
          <button className="css-button" onClick={this.handleAddContentClick}>Add Content</button>
          <button className="css-button" onClick={this.handleChangeDirectionClick}>Change Flex Direction</button>
          <div className="dropdown">
            <button className="dropdown-btn">Justify</button>
            <div className="dropdown-options">
              <button className="option-btn" value="flex-end" onClick={e => this.handleJustifyClick(e.target.value)}>Flex end</button>
              <button className="option-btn" value="flex-start" onClick={e => this.handleJustifyClick(e.target.value)}>Flex start</button>
              <button className="option-btn" value="center" onClick={e => this.handleJustifyClick(e.target.value)}>Center</button>
              <button className="option-btn" value="space-between" onClick={e => this.handleJustifyClick(e.target.value)}>Space between</button>
              <button className="option-btn" value="space-around" onClick={e => this.handleJustifyClick(e.target.value)}>Space around</button>
              <button className="option-btn" value="space-evenly" onClick={e => this.handleJustifyClick(e.target.value)}>Space evenly</button>
            </div>
          </div>
        </div>
        <div className="object-css">
          {/* {style} */}
        </div>
      </div>
    )
  }
}