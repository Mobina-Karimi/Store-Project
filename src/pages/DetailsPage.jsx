import { Link, useParams } from "react-router-dom"
// import { useProductDetails } from "../context/ProductContext"
import Loader from "../components/Loader"
import { SiOpenproject } from "react-icons/si"
import { IoMdPricetag } from "react-icons/io"
import { FaArrowLeft } from "react-icons/fa"
import styles from "./DetailsPage.module.css"
import { useSelector, useDispatch } from "react-redux"
import { fetchProducts } from "../features/product/productSlice"
import { useEffect } from "react"

function DetailsPage() {
  const {id} = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  },[])
  // const productDetails = useProductDetails(+id)
  const productDetails = useSelector(store => store.product.products.find(i => i.id == +id))
  if(!productDetails) return <Loader/>
  return (
    <div className={styles.container}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{productDetails.title}</h3>
        <p className={styles.description}>{productDetails.description}</p>
        <p className={styles.category}>
          <SiOpenproject/>
          {productDetails.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag/>
            {productDetails.price} $
          </span>
          <Link to="/products">
          <FaArrowLeft/>
          <span>Back to Shop</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage