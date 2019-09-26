import React, {Component} from 'react'
import Title from '../Title'


export default class SignUp extends Component {
    render() {
        return(
            <div className="signUpContainer">
                <section className="signUpForm">
                    <Title name="Sign Up" title="Here" />
                    <form>
                        <hr />
                        <h3>First Name</h3>
                        <input type="text" name="firstName" />   
                        <h3>Last Name</h3>
                        <input type="text" name="lastName" />  
                        <h3>Email Address</h3>
                        <input type="text" name="email" />  
                        <h3>Phone</h3>
                        <input type="text" name="phone" />  
                        <h3>User Name</h3>
                        <input type="text" name="userName" />  
                        <h3>Password</h3>
                        <input type="text" name="password" />  
                        <hr />
                        <input type="submit" value="Submit" />
                    </form>
                </section>
            </div> 
        )
    }
}