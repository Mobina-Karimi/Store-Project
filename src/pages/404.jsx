import styles from "./404.module.css"
function PageNotFound() {
  return (
    // <div className={styles.PNFContainer}>
    <div className="flex items-center justify-between flex-row p-5 m-5 max-w-7xl min-h-[100h] sm:flex-col-reverse">
      <div className={styles.PNFtxt}>
        {/* <h2>Oops! Page Not Found</h2> */}
        <h2 className="mb-2.5 p-2.5">Oops! Page Not Found</h2>
        {/* <p>Sorry, the page you're looking for doesn't exist or has been moved.</p> */}
        <p className="mb-[70px] p-2.5">Sorry, the page you're looking for doesn't exist or has been moved.</p>
        {/* <a href="/">Go back to the homepage</a> */}
        <a href="/" className="p-2.5 text-[#e542fe] border border-dashed border-[#e542fe] rounded-sm
          hover:bg-linear-to-r from-[#68406e] to-[#e542fe] hover:text-white hover:border hover:border-dashed hover:border-white">
            Go back to the homepage
        </a>
      </div>
      <div>
        {/* <img src="/404.jpg" alt="Page Not Found"/> */}
        <img src="/404.jpg" alt="Page Not Found" className="w-[400px] h-80"/>
      </div>
    </div>
  )
}

export default PageNotFound;
