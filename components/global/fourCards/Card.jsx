import React from "react";
import styles from "../fourCards/FourCards.module.css";
import Image from "next/image";
import { Button } from "react-bootstrap";

export const Card = (prop) => {
  return (
    <>
      <div className="cardContainer">
        <Image src={prop.carImage} width={700} height={512} alt="cardImage" />
        <div className={`${styles.cardBox} globlCardBox`}>
          <div>
            <h4>{prop.carText1} </h4>
            <div className="box-Hide">
              <div>{prop.carText2}</div>
              <Button variant="primary" size="sm" className={`${styles.exploreBtn} smallBtn`}>
              Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
