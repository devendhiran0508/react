// //login page for full stack project
// import React, { useState, useEffect } from 'react';
// import './LoginPage.css';
// import { FaUserAlt } from "react-icons/fa";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { Plane } from 'lucide-react';



// function LoginPage()
// {
//     return(
//         <div className='wrap'>
//             <div className='form-box'>
//                 <form action="">
//                     <h1>LOGIN</h1>
//                     <div className='input-box'>
//                         <FaUserAlt className='icon'/>
//                         <input type="text" placeholder='USERNAME' required/>
//                     </div>
//                     <div className='input-box'>
//                         <RiLockPasswordFill className='icon'/>
//                         <input type="password" placeholder='PASSWORD' required/>
//                     </div>
//                     <div className='rem-for'>
//                         <label>
//                             <input type="checkbox" />Remember me
//                         </label>
//                         <a href="#">Forget Password</a>
//                     </div>
//                     <button type='submit'>Submit</button>
//                     <div>
//                         <p>Don't have an account? 
//                             <a href="#">Register</a>
//                         </p>
//                     </div>
//                 </form>
//             </div>

//         </div>
//     )
// }
// export default LoginPage;
import React, { useState, useEffect } from 'react';
import { Plane } from 'lucide-react';
import './LoginPage.css';
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const CursorFollow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="background">
      {/* Element that follows the cursor */}
      <div
        className="cursor-follow"
        style={{
          left: `${position.x - 15}px`, // Offset for centering
          top: `${position.y - 15}px`, // Offset for centering
        }}
      >
        <Plane size={30} color="#00BFFF" />
      </div>
      {/* Login Form Content */}
      <div className="form-container">
        <div className="form-box">
          <form action="">
            <h1>LOGIN</h1>
            <div className="input-box">
              <FaUserAlt className="icon" />
              <input type="text" placeholder="USERNAME" required />
            </div>
            <div className="input-box">
              <RiLockPasswordFill className="icon" />
              <input type="password" placeholder="PASSWORD" required />
            </div>
            <div className="rem-for">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forget Password</a>
            </div>
            <button type="submit">Submit</button>
            <div>
              <p>
                Don't have an account? <a href="#">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CursorFollow;
