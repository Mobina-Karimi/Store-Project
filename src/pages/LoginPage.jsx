import { FaFacebookF, FaTwitter } from "react-icons/fa"
import styles from "./Login.module.css"
import { SiGmail } from "react-icons/si"

function LoginPage() {
  return (
    <div className={styles.container}>
        <div className={styles.form}>
         <h3>Login</h3>
         <label htmlFor="username">Username</label>
         <input type="text" placeholder="Enter your username"/>
         <label htmlFor="password">Password</label>
         <input type="text" placeholder="Enter your password"/>
         <button className={styles.loginbtn}>Login</button>
         <a href="#">forgot password?</a>
         <div className={styles.media}>
            <span>Or Sgin Up Using</span>
            <div>
             <button><FaFacebookF/></button>
             <button><FaTwitter/></button> 
             <button><SiGmail/></button> 
            </div>
         </div>
        </div>
    </div>
  )
}

export default LoginPage