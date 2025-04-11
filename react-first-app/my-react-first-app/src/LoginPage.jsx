//login page for full stack project
import './LoginPage.css';
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";



function LoginPage()
{
    return(
        <div className='wrap'>
            <div className='form-box'>
                <form action="">
                    <h1>LOGIN</h1>
                    <div className='input-box'>
                        <FaUserAlt className='icon'/>
                        <input type="text" placeholder='USERNAME' required/>
                    </div>
                    <div className='input-box'>
                        <RiLockPasswordFill className='icon'/>
                        <input type="password" placeholder='PASSWORD' required/>
                    </div>
                    <div className='rem-for'>
                        <label>
                            <input type="checkbox" />Remember me
                        </label>
                        <a href="#">Forget Password</a>
                    </div>
                    <button type='submit'>Submit</button>
                    <div>
                        <p>Don't have an account? 
                            <a href="#">Register</a>
                        </p>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default LoginPage;