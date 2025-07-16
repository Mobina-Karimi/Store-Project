import { MdDeleteOutline } from "react-icons/md"
import { shortenText } from "../helpers/helper"
// import styles from "./BasketCard.module.css"
import { useDispatch } from "react-redux"
import { decrease, increase, removeItem } from "../features/cart/cartSlice"
import "../tailwinds.css";

// function BasketCard({data, clickHandler}) {
function BasketCard({data}) {
    const {image, title, quantity} = data
    const dispatch = useDispatch()
  return (
    // <div className={styles.card}>
    <div className="flex justify-between items-center border border-gray-300 border-dashed rounded-xl p-5 mb-5">
        {/* <img src={image} alt={title}/> */}
        <img src={image} alt={title} className="w-12 h-12"/>
        <p>{shortenText(data.title)}</p>
        {/* <div className={styles.actions}> */}
        <div className="flex items-center">
            {quantity == 1 && (
                // <button onClick={() => dispatch(removeItem(data))}>
                //     <MdDeleteOutline />
                // </button>
                <button onClick={() => dispatch(removeItem(data))} className="basketCards-btn">
                    <MdDeleteOutline />
                </button>
            )}
            {quantity > 1 && (
                // <button onClick={() => dispatch(decrease(data))}> - </button>
                <button onClick={() => dispatch(decrease(data))} className="basketCards-btn"> - </button>
            )}
            {/* <span>{quantity}</span> */}
            <span className="w-5 text-center mx-0.5">{quantity}</span>
            {/* <button onClick={() => dispatch(increase(data))}> + </button> */}
            <button onClick={() => dispatch(increase(data))} className="basketCards-btn"> + </button>
        </div>
    </div>
  )
}

export default BasketCard