import React, { Component} from 'react';
import './error-catch.css';

interface ErrorCatchProps { 
  name:any
}
interface ErrorCatchState {
  
  hasError:boolean
 }
class ErrorCatch extends Component<ErrorCatchProps, ErrorCatchState>{
  constructor(props) {
    super(props);
    this.state={
      hasError:false
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error);
    console.log(errorInfo)
    this.setState({
      hasError:true,
    })
  }

  render(): React.ReactNode {


    if (this.state.hasError) {
      return <div>Error occurred</div>;
    }
    else{
      return <div>
       Hello, {this.props.name}!
      </div>;
    }
  }
}

export default ErrorCatch;
