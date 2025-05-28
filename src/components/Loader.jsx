import { ring } from "ldrs";
import styles from "./Loader.module.css"
import { Ring } from "ldrs/react"
import 'ldrs/react/Ring.css';


function Loader() {
  ring.register();
  return (
    <div className={styles.loader}>
      <div>
        <Ring size={50} speed={1.5} bgOpacity={0.25} color="#e542fe" />
      </div>
    </div>
  )
}

export default Loader