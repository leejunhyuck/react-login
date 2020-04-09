import axios from 'axios'

export const doLogin = (userObj) => {
    return (dispatch) => {
        axios.post("http://localhost:5000/login", userObj)
        .then(res => {
            console.log(res.data)
            dispatch({type:'SUCCESS_LOGIN', payload: res.data})
        } )
    }

}

export const doJoin = (userObj) => {

    return (dispatch) => {
        axios.post("http://localhost:5000", userObj)
        .then(res => {
            console.log(res.data)
            dispatch({type:'SUCCESS_JOIN', payload: res.data})
        } )
    }

}

export const doLogout = () => {

    return (dispatch) => {
        
            dispatch({type:'SUCCESS_LOGOUT'})
        } 
    }





export default {doJoin,doLogin,doLogout}