import { FaListUl } from "react-icons/fa"
import { createQueryObject } from "../helpers/helper"
import styles from "./SideBar.module.css"
import { categories } from "../constants/list"

function SideBar({query, setQuery}) {

  const categoryHandler = (event) => {
    const {tagName} = event.target
    const category = event.target.innerText.toLowerCase()

    if(tagName !== "LI") return

    setQuery(query => createQueryObject(query, {category}))
    // console.log(category)
  }
  return (
    <div className={styles.sidebar}>
        <div>
          <FaListUl/>
          <p>Categories</p>
        </div>
        <ul onClick={categoryHandler}>
          {categories.map(c => 
           <li className={query.category === c.type.toLowerCase() 
           ? styles.selected 
           : null } 
           key={c.id}>
            {c.type}
          </li>)}
        </ul>
    </div>
  )
}

export default SideBar