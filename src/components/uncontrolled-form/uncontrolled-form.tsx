import React, { createRef } from 'react';
import './uncontrolled-form.css';

interface UncontrolledFormState {
  username:string,
  password:string
}
interface UnControlledFormProps{
  callRef:any,
}
class UncontrolledForm extends React.Component<UnControlledFormProps,UncontrolledFormState>{
      constructor(props){
        super(props);
        this.state={
          username:"",
          password:""
        }
      }
      usernameRef = React.createRef<HTMLInputElement>();
      passwordRef=React.createRef<HTMLInputElement>();
      passData=(event)=>{
        event.preventDefault();
        const refData={
          username:this.usernameRef.current?.value,
          password:this.passwordRef.current?.value
        }
        console.log(refData)
        const formData={
          username:event.target.username.value,
          passwrod:event.target.password.value
        }
        console.log(formData)
          this.setState({
            username:event.target.username.value,
            password:event.target.password.value
          })
      }

      render() {
        return(
          <div className='uncontrolled-form' >
            <h4>Un-Controlled Form</h4>
              <form onSubmit={this.passData}>
              <p>UserName:  <input type="text" name='username' placeholder='Enter Username' ref={this.usernameRef}></input> </p>
              <p>Password : <input type="text" name='password' placeholder='Enter password' ref={this.passwordRef}></input> </p>
              <button type='submit'>Click here to view data</button>
              <h1>Username : {this.state.username}</h1>
              <h1>Password : {this.state.password}</h1>
              </form>
          </div>
        )
      }
}

export default UncontrolledForm;
