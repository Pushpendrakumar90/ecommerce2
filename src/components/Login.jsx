import React, { useEffect, useRef, useState } from 'react';
import '../../public/assets/css/login.css'
import { Link, useNavigate, } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';
import axios from 'axios';



const Login = () => {
  const [session, setSession] = useState(null)
  let Navigate = useNavigate()
  let [_login, setLogin] = useState(false);
  let [error, setError] = useState('');
  let userNameRef = useRef();
  let userPasswordRef = useRef();
  let _loginTypeRef = useRef();




  const loginPost = async (newUser) => {
    try {
      let res = await axios.post('http://localhost:5000/api/users/login', newUser)
      setSession(res.data);
      setLogin(true);

    } catch (error) {
      setError(error.message);
      return;
    }

  }

  useEffect(() => {
    if (session?.msg == 'login success !') {
      sessionStorage.setItem('username', session?.user.email);
    }
  }, [session])

  if (session?.msg == 'login success !') {
    Navigate('/')
    refresh() //calling
  }

  // refresh page - 
  function refresh(){
    window.location.href = "/";
  }


  const loginHandler = (e) => {
    e.preventDefault()
    let newUser = {
      email: userNameRef.current.value.trim(),
      // loginType: loginTypeRef.current.value.trim(),
      password: userPasswordRef.current.value.trim()
    }

    loginPost(newUser) //calling
  }




  return (
    <>

      <BreadCrumb title={'Sign-In'}></BreadCrumb>
      <div className="container Login-container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Sign In</h3>
            </div>
            <div className="card-body">
              {error && <p className='text-danger'>{error}</p>}
              {session && <p className='text-success'>{session?.msg}</p>}
              {session && <p className='text-danger'>{session?.error}</p>}
              <form onSubmit={loginHandler}>
                {/* <select className='form-control' ref={loginTypeRef} required>
                  <option >--select type--</option>
                  <option value="admin">admin</option>
                  <option value="user">user</option>
                </select> */}
                <input type="text" className="form-control my-2" placeholder="username" ref={userNameRef} required />
                <input type="password" className="form-control my-2" placeholder="password" ref={userPasswordRef} required />

                <input type="submit" value="Login" className="btn btn-primary px-4" />

              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?<Link to="/sign-up">Sign Up</Link>
              </div>
              <div className="d-flex justify-content-center">
                <Link to="/forgot-pass">Forgot your password?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login



