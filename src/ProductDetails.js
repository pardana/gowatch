import React from "react";
import classes from './ProductDetails.module.css';
import ProductData from "./ProductData";

export default function ProductDetails(props) {
  return (
    <div className={classes.ProductData}>
      <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
      <p className={classes.ProductDescription}>{ProductData.description}</p>

      <h3 className={classes.SectionHeading}>Select Color</h3>
      <img
        className={[classes.ProductImage, classes.SelectedProductImage].join(
          " "
        )}
        src="https://imgur.com/iOeUBV7.png"
        alt="Black Color Watch"
      />
      <img
        className={classes.ProductImage}
        src="https://imgur.com/PTgQlim.png"
        alt="Red Color Watch"
      />
      <img
        className={classes.ProductImage}
        src="https://imgur.com/Mplj1YR.png"
        alt="Blue Color Watch"
      />
      <img
        className={classes.ProductImage}
        src="https://imgur.com/xSIK4M8.png"
        alt="Purple Color Watch"
      />

      <h3 className={classes.SectionHeading}>Features</h3>
      <div>
        <button
          className={[classes.FeaturesItem, classes.SelectedFeaturesItem].join(
            " "
          )}
        >
          Time
        </button>
        <button className={classes.FeaturesItem}>Heart Rate</button>
      </div>

      <button className={classes.PrimaryButton}>Buy Now</button>
    </div>
  );
}
