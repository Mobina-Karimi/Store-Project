import Card from "../components/Card"
import Loader from "../components/Loader"
// import { useProducts } from "../context/ProductContext"
// import styles from "./ProductsPage.module.css"
import { useEffect, useState } from "react"
import { filterProducts, getInitialQuery, searchProducts } from "../helpers/helper";
import { useSearchParams } from "react-router-dom"
import SearchBox from "../components/SearchBox"
import SideBar from "../components/SideBar"
import { fetchProducts } from "../features/product/productSlice";
import { useSelector, useDispatch } from "react-redux"

function ProductsPage() {
  const dispatch = useDispatch()
  const {products, loading} = useSelector(store => store.product)
  const store = useSelector(store => store.product)
  console.log(store)
  // const products = useProducts()
  // const products = []
  const [search, setSearch] =useState("")
  const [displayed, setDisplayed] =useState([])
  const [query, setQuery] = useState({})
  const [searchParams,setSearchParams] = useSearchParams()

  useEffect(() => {
    dispatch(fetchProducts())
  },[])

  useEffect(() => {
    setDisplayed(products)
    setQuery(getInitialQuery(searchParams))
  } ,[products])

  useEffect(() => {
    setSearchParams(query)
    setSearch(query.search || "")
    let finalProducts = searchProducts(products, query.search)
    finalProducts = filterProducts(finalProducts, query.category)
    setDisplayed(finalProducts)
  }, [query])

  return (
    <>
    <SearchBox search={search} setSearch={setSearch} setQuery={setQuery}/>
    {/* <div className={styles.container}> */}
    <div className="flex justify-between m-auto max-w-7xl min-h-[100vh] p-2.5 border-gray-300">
      {/* <div className={styles.products}> */}
      <div className="w-full flex flex-wrap justify-between">
        {/* {!displayed.length && <Loader/>} */}
        {loading && <Loader/>}
        {displayed.map(p => <Card key={p.id} data={p}/>)}
      </div>
      <SideBar query={query} setQuery={setQuery}/>
    </div>
    </>
  )
}

export default ProductsPage