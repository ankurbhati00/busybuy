import { Link } from 'react-router-dom';
import style from './styles/signup.module.css';


export function SignUp() {
    

 return (
   <div className={style.container}>
     <h1 className={style.header}>Sign Up</h1>
     <form action="/">
       <input
         className={style.input}
         type="email"
         placeholder="Enter your email"
       />
       <br />
       <input
         className={style.input}
         type="password"
         placeholder="Enter password"
       />
       <br />
       <input
         className={style.input}
         type="password"
         placeholder="Confirm password"
       />
       <br />
       <button className={style.signup_btn}>Sign Up</button>
     </form>
     <div>
       <Link to="/sign-in" className={style.bottom_text}>
         Already have an account? SignIn
       </Link>
     </div>
   </div>
 );


} 

