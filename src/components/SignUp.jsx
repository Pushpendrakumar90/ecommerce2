import axios from 'axios';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';

function SignUp() {

    const [_newUser, setNewUser] = useState(null);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    // const[formData, setFormData] = useState({});

    // function for post user-
    async function postUser(user) {

        await axios.post('https://backend-1-lk99.onrender.com/api/users', user)
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
        postUser(oneUser)// post user call
    }
    return (
        <>
        <BreadCrumb title={'Sign-Up'}></BreadCrumb>


            <div className=' border p-3 my-2' style={{ alignSelf: 'center', marginLeft: '35%' , height: '68vh' , width: '28vw'}}>

                <p className='fw-bold text-center py-2'>Create user Profile</p>

                {message && <p className='text-success'>{message?.msg}</p>}
                {error && <p className='text-danger'>Error : {error}</p>}

                <form onSubmit={formHandler}>
                    <label htmlFor='name1' className='form-label'>name:</label>
                    <input type="text" className='form-control' name='name1' id='name1' placeholder='enter name' ref={nameRef} required />
                    <br />
                    <label htmlFor='email' className='form-label'>email:</label>
                    <input type="email" className='form-control' name='email' id='email' placeholder='enter email' ref={emailRef} required />
                    <br />
                    <label htmlFor='age' className='form-label'>age:</label>
                    <input type='number' className='form-control' name='age' id='age' placeholder='enter age' ref={ageRef} required />
                    <br />
                    <label htmlFor='pass' className='form-label'>password:</label>
                    <input type='text' className='form-control' name='pass' id='pass' placeholder='********' ref={password} required />
                    <center>
                        <button type='submit' className='btn btn-success my-3 px-5'>sign-up</button>
                        <Link to='/login' className='text-decoration-none px-2'>i have account</Link>
                    </center>
                </form>
            </div>


        </>
    )
}



export default SignUp;
