import React from "react";
import styles from "../fourCards/FourCards.module.css";
import Image from "next/image";
import { Button } from "react-bootstrap";

export const Card = (prop) => {
  return (
    <>
      <div className="cardContainer">
        <Image src={prop.carImage} width={700} height={512} alt="cardImage" />
        <div className={`${styles.cardBox}`}>
          <h5>{prop.carText1} </h5>
          <div className="box-Hide">
            {prop.carText2}
            <Button variant="primary" size="sm" className="mt-3 smallBtn">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
