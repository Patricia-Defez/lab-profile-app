import axios from 'axios';


const API_URL = 'http://localhost:3001'; 

const http = axios.create({
    baseURL: API_URL,
    withCredentials: true
  })

  const register = (user) => { http.post(`/`)}

  const authenticate = (email,password) => { http.post(`/authenticate`)}

  const logout = () => { http.get(`/logout`)}

  const getProfile = () => { http.get(`/profile`)} 

  const editProfile = (user) => { http.put(`/profile`)}



  export {register,authenticate,logout,getProfile,editProfile};