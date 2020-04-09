const initState = {

    name:[],
   
    type:null

}



function userReducer(state = initState , action) {

    console.log("Reducer")
    const {type, payload} = action 

    let newState = state

    if(type === 'SUCCESS_LOGIN'){
        newState = {type:type, name:payload}
    }

    else if(type === 'SUCCESS_JOIN'){

        newState = {type:type}
    }

    if(type === 'SUCCESS_LOGOUT'){
        newState = {type:type}
    }

    //console.log('newState:' , newState)

    return newState
}


export default userReducer
