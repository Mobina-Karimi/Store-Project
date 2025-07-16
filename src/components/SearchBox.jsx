import { ImSearch } from "react-icons/im"
import { createQueryObject } from "../helpers/helper"
import styles from "./SearchBox.module.css"

function SearchBox({search, setSearch ,setQuery}) {
   const searchHandler = () => {
    // console.log("search")
    setQuery(query => createQueryObject(query, {search}))
  }
  return (
    // <div className={styles.search}>
    <div className="mx-24 my-12">
      {/* <input 
        type="text" 
        placeholder="search..." 
        value={search} 
        onChange={e => setSearch(e.target.value.toLowerCase().trim())}/> */}
      <input 
        type="text" 
        placeholder="search..." 
        value={search} 
        onChange={e => setSearch(e.target.value.toLowerCase().trim())} 
        className="border-2 border-dashed border-[#e542fe] p-2.5 w-64 text-sm text-[#e542fe] rounded-lg mr-2.5 focus:outline-none"/>
      {/* <button onClick={searchHandler}> */}
      <button 
        onClick={searchHandler}
        className="p-2.5 text-sm bg-[#e542fe] text-white border-none rounded-lg cursor-pointer">
        <ImSearch/>
      </button>
    </div>
  )
}

export default SearchBox