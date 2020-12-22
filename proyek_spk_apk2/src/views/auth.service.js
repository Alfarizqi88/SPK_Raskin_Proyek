import axios from "axios";

require("dotenv").config();

// ganti sama api url python
const API_URL = "http://cb02b681f445.ngrok.io";

class AuthService{ 

  login(username,password){
    console.log(API_URL);
    return axios
    .post(API_URL + '/auth/login',{
      username,
      password
    })
    .then(response => {
      console.log(response);
      if(response.data.status === "berhasil"){
        localStorage.setItem("user", JSON.stringify(response.data.access_token))
      }
      return response
    })
  }
  getCurrentUser(){
    return JSON.parse(localStorage.getItem("user"));
  }

}
export default new AuthService();