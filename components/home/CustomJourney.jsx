import React from "react";
import Image from "next/image";
import styles from "../home/Home.module.css";

export const CustomJourney = (props) => {
  return (
    <>
    
      <div className={`${styles.jorBox} row d-flex`}>
        <div className={`${styles.jorRowBox} col-md-6`}>
          <div className={`${styles.descriptionSection}`}>
            <h2>
              {props.Heading}
              <span>{props.HeadingSpan}</span>
            </h2>
            <div>{props.Parragraph}</div>
          </div>
        </div>
        <div className={`${styles.jorRowBox} col-md-6`}>
          <div className={`${styles.imgSection}`}>
            <Image
              src={props.JourneyImage}
              width={500}
              height={333}
              className={`${styles.imgJourney}`}
              alt="cardImage"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomJourney;
