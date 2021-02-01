import React from 'react';

let contentArr = [];
let divArr = [];

export default class Content extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      justifyDirection: 'right',
      contentCounter: 0,
      divCounter: 0,
      selectedDiv: 'playground',
    }
  }
  componentDidMount(){

  }
  handleAddContentClick = () =>{
    const playground = document.getElementById('playground');
    let addContent = document.createElement('div');
    let addText = document.createTextNode('Content');
    addContent.appendChild(addText);
    addContent.classList.add('orange-box');
    playground.appendChild(addContent);
    this.addContent();
  }

  handleChangeDirectionClick= () =>{
    const playground = document.getElementById('playground');
    if (playground.style.flexDirection === 'column'){
      playground.style.flexDirection = 'row';
    } else{
      playground.style.flexDirection = 'column';
    }
  }
  
  handleJustifyClick = (alignment) =>{
    const playground = document.getElementById('playground');
    playground.style.justifyContent = alignment;
  }

  addContent = () =>{
    let newContent = {
      key: this.state.contentCounter + 1,
    };
    this.setState({
      contentCounter: (this.state.contentCounter + 1),
    });
    contentArr.push(newContent);
  }

  handleAddNewDiv = () =>{
    let newDiv = document.createElement('div');
    newDiv.classList.add('new-div');
    newDiv.setAttribute('id', this.state.divCounter + 1);
    if (this.state.selectedDiv !== 'playground'){
      let divToAdd = document.getElementById(this.state.selectedDiv);
      divToAdd.appendChild(newDiv);
    }
    else{
      const playground = document.getElementById('playground');
      playground.appendChild(newDiv);
    }
    this.addDiv();
  }

  addDiv = () =>{
    let newDiv = {
      key:this.state.divCounter +1,
    }
    this.setState({
      divCounter : this.state.divCounter + 1,
    });
    divArr.push(newDiv);
  };

  render(){
    return(
      <div id="content">
        <div id="playground">
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
          <button className="css-button" onClick={this.handleAddNewDiv}>Add Div</button>
        </div>
        <div className="object-css">
          {/* {style} */}
        </div>
      </div>
    )
  }
}