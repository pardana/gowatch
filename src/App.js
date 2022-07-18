import logo from './logo.svg';
import classes from './App.module.css';
import ProductData from './ProductData'

function App() {
  const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours()
  const CurrentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes()

  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-symbol-png-logo-vector-9.png' alt='Amazon Logo' />
        </nav>
      </header>

      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <img src="https://imgur.com/iOeUBV7.png" alt="Product Review" />

          {/* <div className={classes.TimeSection}>
            <p>{`${currentHour}:${CurrentMinutes}`}</p>
          </div> */}
          <div className={classes.HeartBeatSection}>
            <i class="fas fa-heartbeat"></i>
            <p>78</p>
          </div>
        </div>

        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>{ProductData.description}</p>

          <h3 className={classes.SectionHeading}>Select Color</h3>
            <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black Color Watch" />
            <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red Color Watch" />
            <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Color Watch" />
            <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple Color Watch" />

            <h3 className={classes.SectionHeading}>Features</h3>
            <div>
              <button className={[classes.FeaturesItem, classes.SelectedFeaturesItem].join(' ')}>Time</button>
              <button className={classes.FeaturesItem}>Heart Rate</button>
            </div>

            <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default App;
