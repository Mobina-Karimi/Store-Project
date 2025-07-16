import { TbChecklist } from "react-icons/tb"
// import styles from "./BasketSidebar.module.css"
import { FaHashtag } from "react-icons/fa"
import { BsPatchCheck } from "react-icons/bs"
import { useDispatch } from "react-redux"
import { checkout } from "../features/cart/cartSlice"
import "../tailwinds.css";

// function BasketSidebar({state, clickHandler}) {
function BasketSidebar({state}) {
  const dispatch = useDispatch()
  return (
    // <div className={styles.sidebar}>
    <div className="w-2xs mr-8 border-2 border-dashed border-[#e542fe] rounded-4xl p-5">
        {/* <div> */}
        <div className="sidebarDivs">
            {/* <TbChecklist/> */}
            <TbChecklist className="sidebarSvgs"/>
            <p>Total:</p>
            {/* <span>{state.total} $</span> */}
            <span className="sidebarSpans">{state.total} $</span>
        </div>
        {/* <div> */}
        <div className="sidebarDivs">
            {/* <FaHashtag/> */}
            <FaHashtag className="sidebarSvgs"/>
            <p>Quantity:</p>
            {/* <span>{state.itemsCounter}</span> */}
            <span className="sidebarSpans">{state.itemsCounter}</span>
        </div>
        {/* <div> */}
        <div className="sidebarDivs">
            {/* <BsPatchCheck/> */}
            <BsPatchCheck className="sidebarSvgs"/>
            <p>Status:</p>
            {/* <span>{!state.checkout && "Pending..."}</span> */}
            <span className="sidebarSpans">{!state.checkout && "Pending..."}</span>
        </div>
        {/* <button onClick={() => dispatch(checkout())}>Checkout</button> */}
        <button onClick={() => dispatch(checkout())} className="w-full mt-9 bg-[#e542fe] text-white border-none text-base p-0.5 rounded-lg cursor-pointer">Checkout</button>
    </div>
  )
}

export default BasketSidebar