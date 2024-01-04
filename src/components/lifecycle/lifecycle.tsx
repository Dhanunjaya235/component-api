import React, { Component, FC } from 'react';
import './lifecycle.css';

interface LifecycleState{
  name:string,
  id:number,
  clicks:number
}
interface LifecyleProps{
  name:string,
  id:number
}
class Lifecycle extends React.Component<LifecyleProps,LifecycleState>{

    constructor(props){
      super(props);
      this.state={
        name:"Dhanunjay",
        id:20,
        clicks:1
      }
    }
    // componentWillMount(): void {
    //   console.log("Component Will Mount Life Cycle Hook");
    //   this.setState({
    //       id:205,
    //       name:"Dhanunjay"
    //   })
    // }
    // componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any): void {
    //   console.log("Component will receive props");
    //   if(this.props.name!=nextProps.name){
    //     this.setState({
    //       name:nextProps.name,
    //       id:nextProps.id
    //     })
    //   }
    // }
    // componentWillUpdate(nextProps: Readonly<LifecyleProps>, nextState: Readonly<LifecycleState>, nextContext: any): void {
      
    // }
    componentDidMount(): void {
      console.log(this.state.name);
      console.log(this.state.id)
    }
    shouldComponentUpdate(nextProps: Readonly<LifecyleProps>, nextState: Readonly<LifecycleState>, nextContext: any): boolean {
      if(this.state.clicks<=10){
        return true
      }
      return false;
    }
    componentDidUpdate(prevProps: Readonly<LifecyleProps>, prevState: Readonly<LifecycleState>, snapshot?: any): void {
      console.log("Component rendered again");
    }
    componentWillUnmount(): void {
      window.alert("Component UnMounted Successfully")
      this.setState({
        clicks:1
      })
    }
    randomNumber=()=>{
      let random=Math.random()*100;
      this.setState({
        id:random,
        clicks:this.state.clicks+1
      })
    }
    render() {
      return (
        <div className='lifecycle'>
          <h1>LifeCycle Methods Implementation</h1>
          <p>Name : {this.state.name}</p>
          <p>ID:{this.state.id}</p>
          <button onClick={this.randomNumber}>Click Here for Random Number</button>
        </div>
      );
    }
}

export default Lifecycle;
