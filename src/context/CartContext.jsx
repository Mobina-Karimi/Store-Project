import { createContext, useContext, useReducer } from "react"
import { sumProducts } from "../helpers/helper"

const CartContext = createContext()

const initialState = {
    selectedItems : [],
    itemsCounter : 0,
    total: 0,
    checkout: false
}

const reducer = (state, action) => {
    // console.log(action)
    switch(action.type){
        case "ADD_ITEM": 
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({...action.payload, quantity: 1})
            }
            return {
                // selectedItems: [...state.selectedItems],
                ...state,
                ...sumProducts(state.selectedItems),
                checkout: false
            }
        case "REMOVE_ITEM":
            const newSelectedItem = state.selectedItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                selectedItems: [...newSelectedItem],
                ...sumProducts(newSelectedItem),
                checkout: false
            }
        case "INCREASE":
            const increaseIndex = state.selectedItems.findIndex(item => item.id == action.payload.id)
            state.selectedItems[increaseIndex].quantity++
            return {
                ...state,
                ...sumProducts(state.selectedItems),
                checkout: false
            }
        case "DECREASE":
            const decreaseIndex = state.selectedItems.findIndex(item => item.id == action.payload.id)
            state.selectedItems[decreaseIndex].quantity--
            return {
                ...state,
                ...sumProducts(state.selectedItems),
                checkout: false
            }
        case "CHECKOUT":
            return {
            selectedItems : [],
            itemsCounter : 0,
            total: 0,
            checkout: true
            }
        default:
            throw new Error("Invalid Action!")
    }
}

function CartProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <CartContext.Provider value={{state, dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

const useCart = () => {
    // const result = useContext(CartContext)
    const {state,dispatch} = useContext(CartContext)
    return [state, dispatch]
    // console.log(result)
}

export default CartProvider
export {useCart}