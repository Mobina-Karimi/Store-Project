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
    // <div className={styles.container}>
    <div className="flex justify-between items-start p-2.5 my-12 mx-auto max-w-7xl min-h-[100vh] border-gray-300">
      {/* <BasketSidebar state={state} clickHandler={clickHandler}/> */}
      <BasketSidebar state={state}/>
      {/* <div className={styles.products}> */}
      <div className="w-full">
        {state.selectedItems.map(product => 
        <BasketCard key={product.id} data={product}/>)}
        {/* // <BasketCard key={product.id} data={product} clickHandler={clickHandler}/>)} */}
      </div>
    </div>
  )
}

export default CheckoutPage