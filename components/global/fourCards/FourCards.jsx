import React from "react";
import styles from "../fourCards/FourCards.module.css";
import Card from "../fourCards/Card";

export const FourCards = () => {
  return (
    <>
      <section className={`${styles.fourCard} sectionGlobal`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center headingOne"><h1>How We Can <span>Assist You</span></h1> <h4></h4></div>
            <div className="col-md-3">
              <div className="cardSection01">
                <Card
                  carImage="/victor/1.png"
                  carText1="Video Consultation"
                  carText2="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="cardSection01">
              <Card
                  carImage="/victor/2.png"
                  carText1="Search By Courses"
                  carText2="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="cardSection01">
              <Card
                  carImage="/victor/3.png"
                  carText1="Search By Country"
                  carText2="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="cardSection01">
              <Card
                  carImage="/victor/4.png"
                  carText1="Result in 5 mints"
                  carText2="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FourCards;
