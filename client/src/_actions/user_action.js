import axios from 'axios'
import {LOGIN_USER, REGISTER_USER} from './types'
export function loginUser(dataToSubmit) {
    //서버에서 받은데이터 저장 
    const request =  axios.post('/api/users/login', dataToSubmit)
    .then(response => response.data)

    //리듀셔로 리턴해준다
    return{
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit) {
    //서버에서 받은데이터 저장 
    const request =  axios.post('/api/users/register', dataToSubmit)
    .then(response => response.data)

    //리듀셔로 리턴해준다
    return{
        type: REGISTER_USER,
        payload: request
    }
}