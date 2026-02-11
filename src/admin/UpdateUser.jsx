import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';

export default function UpdateUser() {


    const [_newUser, setNewUser] = useState(null);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [_oneError, setOneError] = useState(null)
    const [oneUser, setOneUsers] = useState('')
    const [searchParams] = useSearchParams();
    // const[formData, setFormData] = useState({});

    let id = searchParams.get('id');
    useEffect(()=>{
        getbyId()
    },[])
    
    //get user id
    async function getbyId() {
        try {

            setOneUsers(null)
            let response = await axios.get(`https://backend-1-lk99.onrender.com/api/users/${id}`)
            setOneUsers(response.data)
            console.log(response.data);
            
            setOneError(null)

        } catch (err) {
            setOneError(err)
        }
    }

    // function for post user-
    async function updateuser(user) {

         axios.put('https://backend-1-lk99.onrender.com/api/users/'+id, user)
            .then((response) => { setMessage(response.data) })
            .catch((err) => { setError(err.message) });
            nameRef.current.value = ''
            emailRef.current.value = ''
             ageRef.current.value = ''
             password.current.value = ''
    }


    let nameRef = useRef('');
    let emailRef = useRef('');
    let ageRef = useRef('');
    let password = useRef('');

    function formHandler(e) {
        e.preventDefault()
        setNewUser()

        let oneUser = {
            name: nameRef.current.value.trim(),
            email: emailRef.current.value.trim(),
            age: ageRef.current.value.trim(),
            password: password.current.value.trim()
        }
        setNewUser(oneUser)
        updateuser(oneUser)// post user call
    }
    return (
        <>
           <BreadCrumb title={'update-user'}></BreadCrumb>

            <div className='p-3 my-2 border' style={{ alignSelf: 'center', marginLeft: '35%' , height: '68vh' , width: '28vw' }}>

                <p className='fw-bold text-center py-2'>update user Profile</p>

                {message && <p className='text-success'>{message?.msg} - id: {message?.id} </p>}
                {error && <p className='text-danger'>Error : {error}</p>}

                <form onSubmit={formHandler}>
                    <label htmlFor='name' className='form-label'>name:</label>
                    <input type="text" className='form-control' name='name' id='name' placeholder='enter name' ref={nameRef} defaultValue={oneUser?.name} required />
                    <br />
                    <label htmlFor='email' className='form-label'>email:</label>
                    <input type="email" className='form-control' name='email' id='email' placeholder='enter email' ref={emailRef} defaultValue={oneUser?.email} required />
                    <br />
                    <label htmlFor='age' className='form-label'>age:</label>
                    <input type='number' className='form-control' name='age' id='age' placeholder='enter age' ref={ageRef} defaultValue={oneUser?.age} required />
                    <br />
                    <label htmlFor='pass' className='form-label'>password:</label>
                    <input type='text' className='form-control' name='pass' id='pass' placeholder='********' ref={password} defaultValue={oneUser?.password} required />
                    <center>
                        <button type='submit' className='btn btn-success my-3 px-5'>update</button>
                        <Link to='/admin-control/1234' className='text-decoration-none px-2'>go to all user</Link>
                    </center>
                </form>
            </div>
        </>
    )
}


