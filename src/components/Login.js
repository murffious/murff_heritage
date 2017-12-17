import React, {Component, render} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import Cookies from 'universal-cookie';
import {Redirect, Link} from 'react-router-dom';

import {loginUser} from '../../redux/actions/auth';


const form = reduxForm({form: 'login'});


class Login extends Component {
    constructor(props){
        super(props);
        
        this.state ={
          elementToggled: true,
          visible: "lc-block toggled",
          notVisible: "lc-block",
          authenticated: false
          
        }

    }
 
    toggleToElement(event) {
        console.log(event.target.id)
       let element = event.target.id
       this.props.callbackFromParent(element);
        event.preventDefault()
    }
    
    async handleFormSubmit(formProps) {
       await this.props.loginUser(formProps);      
    }

    renderAlert() {
       
       if(this.props.errorMessage.status == undefined){
           
            return null
        }
       else if (this.props.errorMessage.status !== 200) {
            return (
                
                // onClick={this.classList.add('hidden');"
     <div className="alert alert-danger">Invalid email or password, try again

     </div>
            )  
        }
        
    }
    renderNotAuthorizedAlert () {
        
        if (this.props.errorMessage) {
            return (
                
                // onClick={this.classList.add('hidden');"
                <div class="alert alert-warning error" onclick="this.classList.add('hidden');">You are not authorized to access that location.</div>
            )  
        }
    }

    render() {
       
        const {handleSubmit} = this.props;
        return (
           
        <div className="lc-block toggled" id="l-login" > <div className="lcb-form">
            <h1 className="m-t-0 m-b-20 text-left">Login</h1>
            
            <form
                onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
                
                >
                {this.renderAlert()}
                <div style={{
                    display: "none"
                }}>

                    <input type="hidden" name="_method" value="POST"/></div>
                <div className="input-group m-b-20">
                    <span className="input-group-addon">
                        <i className="zmdi zmdi-hc-fw zmdi-email"></i>
                    </span>
                    <div className="fg-line">
                    <Field placeholder="Email" 
                           name="email" 
                           className="form-control" 
                           component="input" 
                           type="text" 
                           required="required"/>
                            </div>
                </div>

                <div className="input-group m-b-20">
                    <span className="input-group-addon">
                        <i className="zmdi zmdi-hc-fw zmdi-lock"></i>
                    </span>
                    <div className="fg-line">
                    <Field
                        name="password"
                        className="form-control"
                        component="input"
                        type="password"
                        placeholder="Password"
                        required="required"
                        />
                            </div>
                </div>
                <button className="btn btn-primary bgm-green waves-effect" type="submit">Login</button>
            </form>
        </div>
        {/* ON successful login go to account screen */}
        {this.props.authenticated
                                ? <Redirect to="/account/dashboard"/>
                                : null}
         <div className = "lcb-navigation" > <a  onClick={this.toggleToElement.bind(this)}  href="" data-ma-action="login-switch" data-ma-block="#l-register">
            <i className="zmdi zmdi-hc-fw zmdi-plus"></i>
            <span id="sign-up">Sign up</span>
        </a> <a onClick={this.toggleToElement.bind(this)} data-ma-action = "login-switch" data-ma-block = "#l-forget-password" > <i>?</i>
         < span id="forgot-password" > Forgot password </span>
        
         
    </a > 
    </div>

     </div>
     
    

    );
  }
}

function mapStateToProps(state) {
    // console.log(state)
  return {
    errorMessage: state.auth.error,
    message: state.auth.message,
    authenticated: state.auth.authenticated,
    elementToggled: state.elementToggled,
    visible: state.visible,
    notVisible: state.notVisible
  };
}

export default connect(mapStateToProps, { loginUser })(form(Login));