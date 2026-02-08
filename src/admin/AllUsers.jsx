import axios from 'axios'
import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react'

export default function AllUser() {
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState([])
  const [oneUser, setOneUsers] = useState('');
  const [error, setError] = useState(null)
  const [oneError, setOneError] = useState(null)
  let inputRef = useRef('');


  //all users 
  async function getUser() {
    try {
      let response = await axios.get('https://backend-1-lk99.onrender.com/api/users/')
      setUsers(response.data.users)
      setError(null)
      console.log(response.data.users)
    } catch (err) {
      setError(err.message)
    }
  }

useEffect(()=>{
        getUser()
},[users.length])

//delete user
async function deleteUser(id){
let sure = window.confirm('are you sure delete user' + id);
if(sure){
  await axios.delete('https://backend-1-lk99.onrender.com/api/users/'+ id);
  getbyId();
  getUser();
}
}


// input data
function getVal() {
   let inputval = inputRef.current.value.trim();
    setSearch(inputval)
}
  // form handler
  function formHandler(e) {
    e.preventDefault()
    getbyId()   
  }
  // find by id name 
  async function getbyId() {
    try {
      setOneUsers(null)
      let response = await axios.get(`https://backend-1-lk99.onrender.com/api/users/${search}`)
      setOneUsers(response.data)
      setOneError(null)
      console.log(response.data)
    } catch (err) {
      setOneError(err)
    }
  }



  

  return (
    <>
      <span className='text-success '><Link to='/sign-up' className='fs-5 text-center text-decoration-none px-5'>add new user</Link></span>
      <div className='w-100 px-2 d-flex'>


    <div className='w-50 float-start px-5 py-3 mt-3 border' style={{height: '70vh' , overflowY: 'scroll'}}>
      <p className=''>All users :  {users.length}</p>
      <table border="1" cellPadding="5" cellSpacing="0" className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>email</th>
             <th>id</th>
             <th>password</th>
          </tr>
        </thead>

        <tbody>
          {users?.map((value, index) => (
            <tr key={index}>
              <td>{value.name}</td>
              <td>{value.age}</td>
              <td>{value.email}</td>
              <td>{value._id}</td>
              <td>{value.password}</td>
            </tr>
          ))}
          {error && <h4 style={{color: 'red'}}>Data not found: {error}</h4>}
        </tbody>
      </table>
      </div>

            
      {/* find by id and name */}
      <div className='w-50 float-end px-3 py-3 border mt-3'style={{height: '70vh'}}>
      <form onSubmit={formHandler} className='form'>
        <span className=''>find by id and Delete / Update</span>
        <input className='form-control' type="text" placeholder='enter user id' ref={inputRef} onChange={getVal} />
      </form>
      

      <table border="1" cellPadding="5" cellSpacing="0" className='table p-5'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>email</th>
            
            <th colSpan={2} className='text-center'>opration</th>
           
          </tr>
        </thead>

        <tbody>
          
           {oneUser && <tr>
              {oneUser.error?  <td className='text-danger'>{oneUser.error}</td> : ''}
              <td>{oneUser.name}</td>
              <td>{oneUser.age}</td>
              <td>{oneUser.email}</td>
             {oneUser._id && <td className='text-center'><Link to={`/update-user?id=${oneUser._id}`} className='text-warning text-decoration-none'>update</Link></td>}
              {oneUser._id && <td className='text-center'><button className=' btn text-danger' onClick={()=>{deleteUser(oneUser._id)}}>delete</button></td>  }
            </tr> }
       {oneError && <h4 style={{color: 'red'}}>Data not found: {oneError.message}</h4>}
         
        </tbody>
      </table>
      </div>
      </div>
      


    </>
  ) 
}

