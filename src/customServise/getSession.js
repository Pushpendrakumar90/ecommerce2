import axios from "axios";

const getSession = async()=> {
    let localUserName = localStorage.getItem('username');

    if(!localUserName)
        return null;
     
    let res = await axios.post(`http://localhost:5000/api/users/getsession/${localUserName}`)
    return (
        res.data
    )
}


export default getSession;