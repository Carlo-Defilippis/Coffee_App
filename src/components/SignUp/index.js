import React, { Component } from 'react'
import { signup } from '../userFunction/index';

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      confirmpassword: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    if (this.state.password !== this.state.confirmpassword) {
      alert("The passwords don't match")
    } else {
      e.preventDefault()
      const newUser = {
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.firstName
      }
      signup(newUser).then(res => {
        this.props.history.push('/login')
      })
    }


  }




  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  id='firstname'
                  aria-required="true"
                  className="form-control"
                  name="firstname"
                  placeholder="Enter first name"
                  defaultValue={this.state.firstName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type='text'
                  id='lastname'
                  aria-required='true'
                  className='form-control'
                  name="lastname"
                  placeholder="Enter last name"
                  defaultValue={this.state.lastName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  aria-required="true"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  aria-required="true"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input
                  type="password"
                  aria-required="true"
                  className="form-control"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  value={this.state.confirmpassword}
                  onChange={this.onChange}
                />
              </div>
              <br></br>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign Up!
                  </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;