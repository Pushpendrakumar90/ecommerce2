import axios from "axios";
import { Navigate } from "react-router-dom";
export default async function  logOut() {
   sessionStorage.clear();
   let res = await axios.post('https://backend-1-lk99.onrender.com/api/users/logout')
   console.log(res.data?.msg); 
   // Navigate('/login') 
   window.location.href = "/login";
}



