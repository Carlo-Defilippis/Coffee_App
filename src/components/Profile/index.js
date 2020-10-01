import React , { Component } from 'react'
import jwt_decode from 'jwt-decode'
import Container from '../Container/index'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            firstName: '',
            errors: ''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            email:decoded.email
        })
    }

    render() {
        return (
          <div>
          
            <h1 style={{ textAlign: "center" }}>Welcome {this.state.firstName}</h1>

          </div>
        )
    }
}

export default Profile