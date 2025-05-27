import styles from "./404.module.css"
function PageNotFound() {
  return (
    <div className={styles.PNFContainer}>
      <div className={styles.PNFtxt}>
        <h2>Oops! Page Not Found</h2>
        <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
        <a href="/">Go back to the homepage</a>
      </div>
      <div>
        <img src="/404.jpg" alt="Page Not Found"/>
      </div>
    </div>
  )
}

export default PageNotFound;
