import { Link, useParams } from "react-router-dom"
// import { useProductDetails } from "../context/ProductContext"
import Loader from "../components/Loader"
import { SiOpenproject } from "react-icons/si"
import { IoMdPricetag } from "react-icons/io"
import { FaArrowLeft } from "react-icons/fa"
// import styles from "./DetailsPage.module.css"
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
    // <div className={styles.container}>
    <div className="flex items-start w-full my-12  mx-auto max-w-7xl max-h-[100vh] p-2.5 border-gray-300">
      {/* <img src={productDetails.image} alt={productDetails.title} /> */}
      <img src={productDetails.image} alt={productDetails.title} className="w-80 py-4 px-6 bg-white border-2 border-dashed border-[#e542fe] rounded-4xl m-2.5 mr-12" />
      {/* <div className={styles.information}> */}
      <div className="w-full border-2 border-dashed border-gray-300 m-2.5 p-6 rounded-4xl">
        {/* <h3 className={styles.title}>{productDetails.title}</h3> */}
        <h3 className="text-[#e542fe] text-2xl mb-10">{productDetails.title}</h3>
        {/* <p className={styles.description}>{productDetails.description}</p> */}
        <p className="text-gray-500 w-lg text-xl mb-10">{productDetails.description}</p>
        {/* <p className={styles.category}> */}
        <p className="mb-2.5">
          <SiOpenproject className="detailCategory"/>
          {productDetails.category}
        </p>
        <div className="flex justify-between">
          <span>
            <IoMdPricetag className="detailCategory"/>
            {productDetails.price} $
          </span>
          <Link to="/products" className="flex items-center bg-[#e542fe] py-1.5 px-2.5 text-white rounded-xl">
          <FaArrowLeft className="mr-2.5 text-white"/>
          <span className="text-white">Back to Shop</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage