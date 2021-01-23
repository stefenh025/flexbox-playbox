import React from 'react';

export default class Content extends React.Component{
  constructor(props){
    super(props)
    this.state ={

    }
    this.handleAddContentClick = this.handleAddContentClick.bind(this);
    this.handleChangeDirectionClick = this.handleChangeDirectionClick.bind(this);
    this.handleJustifyClick = this.handleJustifyClick.bind(this);
  }

  handleAddContentClick(){
    let addContent = document.createElement('div');
    let addText = document.createTextNode('Content');
    addContent.appendChild(addText);
    addContent.classList.add('orange-box');
    let playground = document.getElementById('playground');
    playground.appendChild(addContent);
  }

  handleChangeDirectionClick(){
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
    return(
      <div id="content">
        <div id="playground">
          <div className="orange-box">Content</div>
        </div>
        <div id="user-control">
          <button className="button" onClick={this.handleAddContentClick}>Add Content</button>
          <button className="button" onClick={this.handleChangeDirectionClick}>Change Flex Direction</button>
          <button value="flex-end" className="button" onClick={e => this.handleJustifyClick(e.target.value)}>Justify left</button>
          <div className="dropdown">
            <button className="dropdown-btn">Justify</button>
            <div className="dropdown-options">
              <a value="flex-end" href={e => this.handleJustifyClick(e.target.value)}>Justify end</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}