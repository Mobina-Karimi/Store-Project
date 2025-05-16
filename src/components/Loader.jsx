import { RotatingLines } from "react-loader-spinner"
import styles from "./Loader.module.css"

function Loader() {
  return (
    <div className={styles.loader}>
        <RotatingLines width="100px" height="100px" strokeColor="#f25d42" strokeWidth="3"/>
    </div>
  )
}

export default Loader