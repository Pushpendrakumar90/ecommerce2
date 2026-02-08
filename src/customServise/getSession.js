import axios from "axios";

const getSession = async()=> {
    let localUserName = localStorage.getItem('username');

    if(!localUserName)
        return null;
     
    let res = await axios.post(`https://backend-1-lk99.onrender.com/api/users/getsession/${localUserName}`)
    return (
        res.data
    )
}



export default getSession;
