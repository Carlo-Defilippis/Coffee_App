import React, { useState, useEffect } from 'react'
import axios from 'axios';

const JWTToken = 'carloivanmauryael'

// import GeoLocateMe from '../../utils/locationapi/geolocation'

const Signup = function () {

    const [users, setUsers] = useState(null);

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    // const geolocation = geoLoc();

    console.log(window)
    useEffect(() => {
        axios
            .get("/", { headers: {"Authorization" : `Bearer ${JWTToken}`}})
            .then((users) => setUsers(users), console.log('Users in useEffect: ', users))
            .catch((err) => console.log(err));
    }, []);

    // function geoLoc() {
    //     const geoLocation = new GeoLocateMe();
    //     geoLocation.getAddress().then(r => {
    //         console.log(r.split(','))
    //         let myArray = r.split(',')
    //         console.log({ lat: `${myArray[0]}`, lng: `${myArray[1]}` })
    //     })
    // };
    var myBody = { firstname, lastname, email, password, confirmpassword }
    console.log('MyBody:', myBody)
    console.log(firstname, lastname, email, password, confirmpassword)
    function submitForm(event) {
        event.preventDefault()


        console.log('These are the states', firstname, lastname, email, password, confirmpassword)

        if (email === "" || password === "" || firstname === "" || lastname === "") {
            alert("Please fill out all fields!");
            return;
        }

        if (password !== confirmpassword) {
            alert("The passwords don't match")
        } else {
            event.preventDefault()
            axios.post('/register', {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
            })
                .then(function (result) {
                    alert("Account created successfully");
                    console.log("Result of succesful login: ", result);
                    this.props.history.push('/profile');
                })
                .catch(function (err) {
                    console.log("Could not create account. Please try again", err.response);
                });
            // axios
            //     .post("/api/users", {
            //         firstname: firstname,
            //         lastname: lastname,
            //         email: email,
            //         password: password,
            //     }, console.log(firstname, lastname, email, password), console.log("This is the users ", users))
            //     .then(function (result) {
            //         alert("Account created successfully");
            //         console.log("Result of succesful login: ", result);
            //         this.props.history.push('/profile');
            //     })
            //     .catch(function (err) {
            //         console.log("Could not create account. Please try again", err.response);
            //     });
        }
    }
    console.log('Email and Password', email, password)

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className='card mx-auto'>
                        <div className="col-md-6 mt-5 mx-auto">
                            <form onSubmit={submitForm}>
                                <h1 className="h3 mb-3 font-weight-normal">Sign up and get your coffee fix!</h1>
                                <div className="form-group">
                                    <label htmlFor="firstname">First Name</label>
                                    <input
                                        type="text"
                                        id='firstname'
                                        aria-required="true"
                                        className="form-control"
                                        name="firstname"
                                        placeholder="Enter first name"
                                        onChange={(e) => setFirstName(e.target.value)}
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
                                        onChange={(e) => setLastName(e.target.value)}
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
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        onChange={(e) => setPassword(e.target.value)}
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
                                        onChange={(e) => setConfirmPassword(e.target.value)}
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
            </div>
        </>
    )
}

export default Signup;




// constructor() {
    //     super()
    //     this.state = {
    //         email: '',
    //         password: '',
    //         firstName: '',
    //         lastName: '',
    //         confirmpassword: '',
    //         errors: {}
    //     }
    //     this.onChange = this.onChange.bind(this)
    //     this.onSubmit = this.onSubmit.bind(this)
    // }

    // onChange(e) {
    //     this.setState({ [e.target.name]: e.target.value })
    // }
    // onSubmit(e) {
    //     if (this.state.password !== this.state.confirmpassword) {
    //         alert("The passwords don't match")
    //     } else {
    //         e.preventDefault()
    //         const newUser = {
    //             email: this.state.email,
    //             password: this.state.password,
    //             firstName: this.state.firstName,
    //             lastName: this.state.firstName
    //         }
    //         signup(newUser).then(res => {
    //             this.props.history.push('/login')
    //         })
    //     }


    // }