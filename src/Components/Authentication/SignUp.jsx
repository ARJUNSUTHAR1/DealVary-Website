import React from 'react'
// import SignUp_img from '../../assets/SignUp_img.svg'
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiLockPasswordLine} from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'

const SignUp = () => {
  return (
    <div className='main-container'>
      {/* <img src={SignUp_img} alt="" /> */}
      <div className="sub-container">
        <div className="content">
          <form action="#">
            <h1>SignUp</h1>
            <div className="email-input">
              <div><MdOutlineMailOutline /></div>
              <input type="email" placeholder='Enter your Email' />
            </div>
            <div className="pass-input">
              <div><RiLockPasswordLine /></div>
              <input type="password" placeholder='Enter your Password' />
            </div>
            <div className="pass-input">
              <div><RiLockPasswordLine /></div>
              <input type="password" placeholder='Verify your Password' />
            </div>
            <button className="SignUp">SignUp</button>
          </form>
          <div className="google-register">
            <FcGoogle />
            <div>
              Sign Up with Google
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
