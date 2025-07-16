import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb"
import { Link } from "react-router-dom"
import {productQuantity, shortenText} from "../helpers/helper"
// import styles from "./Card.module.css"
// import { useCart } from "../context/CartContext"
import { MdDeleteOutline } from "react-icons/md"
import { useSelector, useDispatch } from "react-redux"
import {addItem, decrease, increase, removeItem} from "../features/cart/cartSlice"

function Card({data}) {
    const {id, title, image, price} = data

    const state = useSelector(store => store.cart)
    const dispatch = useDispatch()
    console.log(state)


    // const [state, dispatch] = useCart()

    const quantity = productQuantity(state,id)
    // const quantity = 0

    // const clickHandler = (type) => {
    //     // dispatch({type, payload: data})
    // }

  return (
    // <div className={styles.card}>
    <div className="flex flex-col items-start justify-end w-72 m-2.5 p-5 bg-white border-2 border-dashed border-gray-300 rounded-2xl ">
        {/* <img src={image} alt={title} loading="lazy"/> */}
        <img src={image} alt={title} loading="lazy" className="w-56 h-56 p-5 mb-5 bg-white"/>
        {/* <h3>{shortenText(title)}</h3> */}
        <h3 className="text-[#e542fe] text-xl">{shortenText(title)}</h3>
        {/* <p>{price}</p> */}
        <p className="text-gray-600 text-xl font-semibold mt-2.5 mb-8">{price}</p>
        {/* <div className={styles.actions}> */}
        <div className="flex items-center w-full justify-between">
            {/* <Link to={`/products/${id}`}> */}
            <Link to={`/products/${id}`} className="text-2xl h-6 text-[#e542fe] cursor-pointer">
                <TbListDetails/>
            </Link>
            {/* <div> */}
            <div className="flex items-center">
                {quantity == 1 && (
                    // <button onClick={() => dispatch(removeItem(data))}>
                    <button onClick={() => dispatch(removeItem(data))} className="cardBtn">
                    <MdDeleteOutline/>
                    </button>
                )}
                {quantity > 1 && (
                    //  <button onClick={() => dispatch(decrease(data))}>
                     <button onClick={() => dispatch(decrease(data))} className="cardBtn">
                    -
                    </button>
                )}
                {/* {!!quantity && <span>{quantity}</span>} */}
                {!!quantity && <span className="m-5 text-center px-2.5">{quantity}</span>}
                {quantity == 0 ? (
                    // <button onClick={() => dispatch(addItem(data))}>
                    <button onClick={() => dispatch(addItem(data))} className="cardBtn">
                    <TbShoppingBagCheck/>
                    </button>) : (
                    // <button onClick={() => dispatch(increase(data))}>
                    <button onClick={() => dispatch(increase(data))} className="cardBtn">
                    +
                    </button>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Card