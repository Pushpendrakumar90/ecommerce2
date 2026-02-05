// import getSession from "./getSession";


export const auth = ()=>{
    // let session = getSession()
    // console.log(session);
    
    return sessionStorage.getItem('username') !== null;
}