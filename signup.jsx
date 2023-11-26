import React from 'react'
import usePasswordToggle from '../Hooks/usePasswordToggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
const Signup = () =>{
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  return (
    <div>
      <div className='login-container'>
        <div className='login-content'>
            <h1 className='signupTag' style={{marginTop:'10px'}}>Create an Account</h1>
            <div className='form-group input-group'>
                <div style={{width:'100%'}}>
                    <h6>Name</h6>
                </div>
                <div className='input-group-prepend'>
                    <span className='input-group-text' style={{paddingRight:'12px'}}>
                        <FontAwesomeIcon icon={faUser}/>
                    </span>
                </div>
                <input className='form-control' placeholder='John Doe' type='text' />
            </div>
            <div className='form-group input-group'>
                <div style={{width:'100%'}}>
                    <h6>Email</h6>
                </div>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </span>
                </div>
                <input className='form-control' placeholder='hello@examle.com' type='email' />
            </div>
            <div className='form-group input-group'>
                <div  style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                    <h6>Password</h6>
                    <a href='#' style={{textDecoration:'none'}}>Forgot Password?</a>
                </div>
                <div className='input-group-prepend'>
                    <span className='input-group-text' style={{paddingRight:'12px'}}>
                        <FontAwesomeIcon icon={faLock}/>
                    </span>
                </div>
                <input className='form-control' placeholder='••••••••••••••••' type={PasswordInputType} />
                <span className='password-toggle-icon'>{ToggleIcon}</span>
            </div>
            <div>
                <button className='btn btn-primary btn-block btn-login' >Signup</button>
            </div>
            <div style={{textAlign:'center',margin:'12px auto'}}>
                <p>or</p>
            </div>
            <div>
                <button className='btn btn-primary btn-block btn-google'><img src="icons/google_icon.png" style={{height:'100%'}} alt="" /><a style={{marginLeft:'15px',height:'100%'}}>Continue with Google</a></button>
            </div>
            <div style={{textAlign:'center',margin:'15px auto'}}>
            <p>Already have an account? <a href='/login' style={{textDecoration:'none',fontWeight:'600'}}>Sign in here</a></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
