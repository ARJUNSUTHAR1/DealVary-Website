import React from 'react'
// import Login_img from '../../assets/Login_img.svg'
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiLockPasswordLine} from 'react-icons/ri'

const Login = () => {
  return (
    <div className='main-container'>
      {/* <img src={Login_img} alt="" /> */}
      <div className="sub-container">
        <div className="content">
          <form action="#">
            <h1>Login</h1>
            <div className="email-input">
              <div><MdOutlineMailOutline /></div>
              <input type="email" placeholder='Enter your Email' />
            </div>
            <div className="pass-input">
              <div><RiLockPasswordLine /></div>
              <input type="password" placeholder='Enter your Password' />
            </div>
            <button className="login">Login</button>
            <div className="forgot-pass">Forget password ?</div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
