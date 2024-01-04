import React from 'react';
import './controlled-form.css';

interface ControlledFormProps {}

interface ControlledFormState{
    username:string,
    password:string
}

class ControlledForm extends React.Component<ControlledFormProps,ControlledFormState>{
          constructor(props){
            super(props);
              this.state={
                username:"",
                password:""
              }
          }

          onUsernameChange=(event)=>{
              this.setState({
                username:event.target.value,
              })
          }

          onPasswordChange=(event)=>{
            this.setState({
              password:event.target.value,
            })
        }

          onSubmit=(event)=>{
            event.preventDefault();
            const formdata={
              username:event.target.username.value,
              password:event.target.password.value
            }
            console.log(formdata)
          }

          render(): React.ReactNode {
            return(
              <div className='controlled-form'>
                    <h4>Controlled Form</h4>
                    <form onSubmit={this.onSubmit}>
                      <p>UserName:  <input type="text" name="username" onChange={this.onUsernameChange} placeholder="Enter Useranme" ></input></p>
                      <p>Password : <input type="password" name='password'  onChange={this.onPasswordChange} placeholder="Enter Password"></input></p>
                      <button type='submit'>Click here for form submit</button>
                    </form>
                    <h1>UserName: {this.state.username}</h1>
                    <h1>Password : {this.state.password}</h1>
              </div>
            )
          }
}

export default ControlledForm;
