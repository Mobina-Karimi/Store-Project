import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb"
import { Link } from "react-router-dom"
import {productQuantity, shortenText} from "../helpers/helper"
import styles from "./Card.module.css"
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
    <div className={styles.card}>
        <img src={image} alt={title} loading="lazy"/>
        <h3>{shortenText(title)}</h3>
        <p>{price}</p>
        <div className={styles.actions}>
            <Link to={`/products/${id}`}>
                <TbListDetails/>
            </Link>
            <div>
                {quantity == 1 && (
                    <button onClick={() => dispatch(removeItem(data))}>
                    <MdDeleteOutline/>
                    </button>
                )}
                {quantity > 1 && (
                     <button onClick={() => dispatch(decrease(data))}>
                    -
                    </button>
                )}
                {!!quantity && <span>{quantity}</span>}
                {quantity == 0 ? (
                    <button onClick={() => dispatch(addItem(data))}>
                    <TbShoppingBagCheck/>
                    </button>) : (
                    <button onClick={() => dispatch(increase(data))}>
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