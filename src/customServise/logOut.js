import axios from "axios";
import { Navigate } from "react-router-dom";
export default async function  logOut() {
   sessionStorage.clear();
   let res = await axios.post('http://localhost:5000/api/users/logout')
   console.log(res.data?.msg); 
   // Navigate('/login') 
   window.location.href = "/login";
}


