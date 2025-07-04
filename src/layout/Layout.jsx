import { PiShoppingCartSimpleBold } from "react-icons/pi"
import { Link } from "react-router-dom"
// import { useCart } from "../context/CartContext"
import styles from "./Layout.module.css"
import { useSelector } from "react-redux"
import { MdOutlineAccountCircle } from "react-icons/md"

function Layout({children}) {
  // const [state] = useCart()
  const state = useSelector(store => store.cart)
  return (
    <>
    <header className={styles.header}>
      <img src="/Logo.png"/>
      <Link to="/products">Mobina Shop</Link>
      <div  className={styles.headerIcon}>
        <Link to="/login">
          <div className={styles.iconWrapper}>
            <MdOutlineAccountCircle/>
          </div>
        </Link>
        <Link to="/checkout">
          <div className={styles.iconWrapper}>
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