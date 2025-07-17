import { FaFacebookF, FaTwitter } from "react-icons/fa"
// import styles from "./Login.module.css"
import { SiGmail } from "react-icons/si"

function LoginPage() {
  return (
    // <div className={styles.container}>
    <div className="flex justify-center items-center m-auto max-w-7xl min-h-[130vh]">
        {/* <div className={styles.form}> */}
        <div className="flex flex-col gap-5 w-[35vw] h-[100vh] bg-linear-to-r from-[#e77ff8] to-[#f8cdff] 
          rounded-sm p-5 text-white shadow-[5px_5px_10px_rgba(97,97,97,0.5)] max-md:w-[60vw]">
         {/* <h3>Login</h3> */}
         <h3 className="flex items-center justify-center font-black text-2xl">Login</h3>
         <label htmlFor="username">Username</label>
         {/* <input type="text" placeholder="Enter your username"/> */}
         <input type="text" placeholder="Enter your username" className="loginFormInput"/>
         <label htmlFor="password">Password</label>
         {/* <input type="text" placeholder="Enter your password"/> */}
         <input type="text" placeholder="Enter your password" className="loginFormInput"/>
         {/* <button className={styles.loginbtn}>Login</button> */}
         <button className="h-10 rounded-sm border border-dashed border-white p-2.5 mt-4 bg-linear-to-r from-[#f3a6ff] to-[#e542fe] font-semibold cursor-pointer
            hover:border hover:border-dashed hover:border-white hover:bg-linear-to-r hover:from-[#68406e] hover:to-[#e542fe]">Login</button>
         {/* <a href="#">forgot password?</a> */}
         <a href="#">
          <span  className="hover:text-black">forgot password?</span>
         </a>
         {/* <div className={styles.media}> */}
         <div className="flex justify-center items-center flex-col">
            <span className="mb-2.5">Or Sgin Up Using</span>
            <div>
             <button className="loginMediaBtn text-blue-800"><FaFacebookF/></button>
             <button className="loginMediaBtn text-blue-400"><FaTwitter/></button> 
             <button className="loginMediaBtn text-red-600"><SiGmail/></button> 
            </div>
         </div>
        </div>
    </div>
  )
}

export default LoginPage