import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Error from './pages/Error'
import Contact from './pages/Contact'
import Service from './pages/Service'
import SingleBlog from './pages/SingleBlog'
import Blog from './pages/Blog'
import PopularGoods from './components/PopularGoods'
import Menu from './pages/Menu'
import Search from './components/Search'
import AdminControl from './admin/AdminControl'
import Login from './components/Login'
import SignUp from './components/SignUp'
import UpdateUser from './admin/UpdateUser'

import ProtectedRoute from './customServise/ProtectedRoute'
import Forgot from './components/Forgot'

function App() {



  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
          <Route path='/forgot-pass' element={<Forgot></Forgot>}></Route>


          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/update-user' element={<UpdateUser></UpdateUser>}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/service' element={<Service />}></Route>
            <Route path='/Blogs' element={<Blog />}></Route>
            <Route path='/menu' element={<Menu />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/SingleBlog' element={<SingleBlog />}></Route>
            <Route path='/*' element={<Error />}></Route>
            <Route path='/admin-control/:id' element={<AdminControl />}></Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter >
    </>
  )
}

export default App
