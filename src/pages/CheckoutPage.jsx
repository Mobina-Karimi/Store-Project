import BasketCard from "../components/BasketCard"
import BasketSidebar from "../components/BasketSidebar"
// import {useCart} from "../context/CartContext"
import styles from "./CheckoutPage.module.css"
import { useSelector, useDispatch } from "react-redux"

function CheckoutPage() {
  // const [state, dispatch] = useCart()
  const state = useSelector(store => store.cart)
  
  // const clickHandler = (type, payload) => dispatch({type, payload})

  if(!state.itemsCounter){
    return (
    <div className={styles.container}>
      <p>Empty</p>
    </div>)
  }

  return (
    <div className={styles.container}>
      {/* <BasketSidebar state={state} clickHandler={clickHandler}/> */}
      <BasketSidebar state={state}/>
      <div className={styles.products}>
        {state.selectedItems.map(product => 
        <BasketCard key={product.id} data={product}/>)}
        {/* // <BasketCard key={product.id} data={product} clickHandler={clickHandler}/>)} */}
      </div>
    </div>
  )
}

export default CheckoutPage