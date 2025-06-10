import { PiShoppingCartSimpleBold } from "react-icons/pi"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import styles from "./Layout.module.css"
import { MdOutlineAccountCircle } from "react-icons/md"

function Layout({children}) {
  const [state] = useCart()
  return (
    <>
    <header className={styles.header}>
      <img src="/Logo.png"/>
      <Link to="/products">Mobina Shop</Link>
      <div  className={styles.headerIcon}>
        <Link to="/login">
          <MdOutlineAccountCircle/>
        </Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold/>
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </div>
    </header>
    {children}
    <footer className={styles.footer}>Dveloped by Mobina</footer>
    </>
  )
}

export default Layout