import React from 'react'
import LoginForm from '../forms/LoginForm'
import Title from '../Title'


class LoginPage extends React.Component {

  submit = (data) => {
    console.log(data)
  }

  render() {
    return (
      <div className="loginContainer">

        <section className="loginPage">
          <Title name="User" title="Login" />

                        <form>
                        <div className='loginForm'>
              <LoginForm submit={this.submit} />
            </div>

                        </form>
                    </section>

      </div> 
    )
  }
}

export default LoginPage