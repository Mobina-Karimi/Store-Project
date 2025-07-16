import { FaListUl } from "react-icons/fa"
import { createQueryObject } from "../helpers/helper"
// import styles from "./SideBar.module.css"
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
    // <div className={styles.sidebar}>
    <div className="w-52 h-fit m-2.5 p-5 ml-7 bg-white border-2 border-dashed border-gray-300 rounded-xl">
        {/* <div> */}
        <div className="w-52 flex mb-2.5 text-[#e542fe] font-medium">
          <FaListUl/>
          {/* <p>Categories</p> */}
          <p className="ml-2.5">Categories</p>
        </div>
        {/* <ul onClick={categoryHandler}>
          {categories.map(c =>  
           <li className={query.category === c.type.toLowerCase() 
           ? className="bg-[#f7753d49] text-[#e542fe] rounded-xl"
           : null } 
           key={c.id}>
            {c.type}
          </li>)}
        </ul> */}
        <ul onClick={categoryHandler}>
          {categories.map(c => {
            const isActive = query.category === c.type.toLowerCase();
            return (
              <li
                key={c.id}
                className={`
                  list-none p-1 cursor-pointer rounded-md transition-colors hover:text-[#e542fe]
                  ${isActive ? "bg-[#f7753d49] text-[#e542fe]" : "text-gray-700"}
                `}
              >
                {c.type}
              </li>
            );
          })}
        </ul>
    </div>
  )
}

export default SideBar