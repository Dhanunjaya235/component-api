import ReactDOM from 'react-dom';
import * as React from 'react';
import './apis.css';
interface Props{
 
}

interface State {
  count: number
}

class Apis extends React.Component<Props, State>{
  
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 1,
    }
   
  }
  setStateButtonClick = () => {
    if(this.state.count%5==0){
      this.setState({
        count: this.state.count + 5
      })
    }
    else{
      this.setState({
        count: this.state.count + 1
      })
    }
    const element=document.getElementById('result');
    let ele=ReactDOM.findDOMNode(element)as HTMLHeadingElement;
    ele.style.color="blue"
  }

  changingTheStateDirectly = () => {
    this.state.count += 1;
    console.log(this.state.count);
    const element=document.getElementById('result');
    let ele=ReactDOM.findDOMNode(element)as HTMLHeadingElement;
    ele.style.color="red"
  }

  updatingDOMForcefully = () => {
    this.state.count += 1;
    this.forceUpdate();
    const element=document.getElementById('result');
    let ele=ReactDOM.findDOMNode(element)as HTMLHeadingElement;
    ele.style.color="violet"
  }
  render() {
    return (
      <>
        <div className='apis'>
          <button onClick={this.setStateButtonClick}>With SetState</button>
          <button onClick={this.updatingDOMForcefully}>With ForceUpdate</button>
          <button onClick={this.changingTheStateDirectly}>Changing the state directly</button>
        </div>
        <h1 className='paragraph' id='result' >You have Clicked the SetState Button {this.state.count} times</h1>
      </>
    );
  }
}



export default Apis;