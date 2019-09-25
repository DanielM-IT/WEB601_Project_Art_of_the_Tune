import React from 'react'
import LoginForm from '../forms/LoginForm'
import Title from '../Title'


class LoginPage extends React.Component {

  submit = (data) => {
    console.log(data)
  }

  render() {
    return (
      <div>
        <Title name="Sign Up" title="Here" />
        <LoginForm submit={this.submit} />
      </div>
    )
  }
}

export default LoginPage