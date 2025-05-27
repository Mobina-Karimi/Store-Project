import { PiShoppingCartSimpleBold } from "react-icons/pi"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import styles from "./Layout.module.css"

function Layout({children}) {
  const [state] = useCart()
  return (
    <>
    <header className={styles.header}>
      <img src="/Logo.png"/>
      <Link to="/products">Mobina Shop</Link>
      <Link to="/checkout">
       <div>
         <PiShoppingCartSimpleBold/>
         {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
       </div>
      </Link>
    </header>
    {children}
    <footer className={styles.footer}>Dveloped by Mobina</footer>
    </>
  )
}

export default Layout