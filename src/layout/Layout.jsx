import { PiShoppingCartSimpleBold } from "react-icons/pi"
import { Link } from "react-router-dom"
// import { useCart } from "../context/CartContext"
// import styles from "./Layout.module.css"
import { useSelector } from "react-redux"
import { MdOutlineAccountCircle } from "react-icons/md"
import "../tailwinds.css";

function Layout({children}) {
  // const [state] = useCart()
  const state = useSelector(store => store.cart)
  return (
    <>
    {/* <header className={styles.header}> */}
    <header className="flex items-center justify-between bg-linear-to-r from-[#e542fe] to-[#f3a6ff] text-white py-9 px-5 shadow-[0_4px_10px_rgba(229,66,254,0.5)] h-16 overflow-hidden">
      {/* <img src="/Logo.png"/> */}
      <img src="/Logo.png" className="w-13 h-13 object-contain rounded-lg"/>
      {/* <Link to="/products">Mobina Shop</Link> */}
      <Link to="/products" className="layoutLinks">Mobina Shop</Link>
      {/* <div  className={styles.headerIcon}> */}
      <div  className="flex items-center gap-5">
        <Link to="/login" className="layoutLinks">
          {/* <div className={styles.iconWrapper}> */}
          <div className="layoutIcon">
            <MdOutlineAccountCircle/>
          </div>
        </Link>
        <Link to="/checkout" className="layoutLinks">
          {/* <div className={styles.iconWrapper}>
            <PiShoppingCartSimpleBold/>
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div> */}
          <div className="layoutIcon">
            <PiShoppingCartSimpleBold/>
            {!!state.itemsCounter && (
              <span
                className="
                  absolute -top-1.5 -right-1.5
                  w-5 h-5 text-[0.85rem]
                  bg-black text-white rounded-full
                  flex items-center justify-center
                  font-semibold shadow-[0_0_5px_rgba(0,0,0,0.5)]
                  select-none
                "
              >
                {state.itemsCounter}
              </span>
            )}
          </div>
        </Link>
      </div>
    </header>
    {children}
    {/* <footer className={styles.footer}>Dveloped by Mobina</footer> */}
    <footer className="text-center bg-linear-to-r from-[#e542fe]
        to-[#f3a6ff] text-white py-6 px-5 font-semibold 
        shadow-[0_-3px_10px_rgba(229,66,254,0.5)] select-none">
      Dveloped by Mobina
    </footer>
    </>
  )
}

export default Layout