import Card from "../components/Card"
import Loader from "../components/Loader"
import { useProducts } from "../context/ProductContext"
import styles from "./ProductsPage.module.css"
import { useEffect, useState } from "react"
import { filterProducts, getInitialQuery, searchProducts } from "../helpers/helper";
import { useSearchParams } from "react-router-dom"
import SearchBox from "../components/SearchBox"
import SideBar from "../components/SideBar"

function ProductsPage() {
  const products = useProducts()
  const [search, setSearch] =useState("")
  const [displayed, setDisplayed] =useState([])
  const [query, setQuery] = useState({})
  const [searchParams,setSearchParams] = useSearchParams()

  useEffect(() => {
    setDisplayed(products)
    // const query ={}
    // const category = searchParams.get("category")
    // const search = searchParams.get("search")
    // if(category) query.category = category
    // if(search) query.search = search
    // setQuery(query)
    setQuery(getInitialQuery(searchParams))
  } ,[products])

  useEffect(() => {
    setSearchParams(query)
    setSearch(query.search || "")
    // console.log(query)
    let finalProducts = searchProducts(products, query.search)
    finalProducts = filterProducts(finalProducts, query.category)
    // console.log(finalProducts)
    setDisplayed(finalProducts)
  }, [query])

  // console.log(products)
  return (
    <>
    <SearchBox search={search} setSearch={setSearch} setQuery={setQuery}/>
    <div className={styles.container}>
      <div className={styles.products}>
        {!displayed.length && <Loader/>}
        {displayed.map(p => <Card key={p.id} data={p}/>)}
      </div>
      <SideBar query={query} setQuery={setQuery}/>
    </div>
    </>
  )
}

export default ProductsPage