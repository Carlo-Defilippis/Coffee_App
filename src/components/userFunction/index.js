import axios from 'axios'

export const signup = newUser => {
    return axios
    .post('user/signup', {
        email: newUser.email,
        password: newUser.password
    })
    .then(response => {
        console.log('Registered')
        console.log('Response from signup userFunction: ', response)
    });
}

export const login = user => {
    return axios
    .post('user/login', {
        email: user.login,
        password: user.password
    })
    .then(response => {
        localStorage.setItem('usertoken', response.data)
        return response.data
    })
    .catch(err => {
        console.log(err)
    })
}

export const getProfile = user => {
    return axios
    .get('user/profile', {
        email: user.login,
        password: user.password
    })
    .then(response => {
        console.log(response)
        return response.data
    })
    .catch(err => {
        console.log(err.response)
    })
}

// Dummy Url.
const url = 'https://jsonplaceholder.typicode.com/posts/1'

// Axios Test.
const axiosTest = axios.get

// Axios Test Data.
export const test = axiosTest(url).then(function(axiosTestResult) {
  return console.log('response.JSON:', {
    message: 'Request received',
    data: axiosTestResult.data
  })
})