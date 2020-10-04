import React , { Component } from 'react'
import jwt_decode from 'jwt-decode'
import Container from '../Container/index'
import GoogleMaps from '../../utils/locationapi/googlemaps'
import Places from '../../utils/locationapi/placesfromlocation'

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
          <Container>
            <GoogleMaps></GoogleMaps>
          {/* google maps */}

            <h1 style={{ textAlign: "center" }}>Welcome {this.state.firstname}</h1>
          {/* Places near me */}

          {/* Past orders */}
          </Container>
          </div>
        )
    }
}

export default Profile