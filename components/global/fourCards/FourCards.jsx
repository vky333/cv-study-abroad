import React from "react";
import styles from "../fourCards/FourCards.module.css";
import Card from "../fourCards/Card";

export const FourCards = () => {
  return (
    <>
      <section className={`${styles.fourCard01} sectionGlobal`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center headingOne">
              <h1>
                How We Can
                <div>
                  <span>Assist You</span>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.fourCard} sectionGlobal`}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="cardSection01">
                <Card
                  carImage="/victor/suggestUniversity.svg"
                  carText1="Suggest a University in 5 Mins "
                  carText2="All you have to do is to fill in the essential details for us, and our AI Based search will guide you to the courses or universities which are the best fit for you! 
                  Try it!
                  "
                />
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="cardSection01">
                <Card
                  carImage="/victor/talkToExperts.svg"
                  carText1="Talk with an Experts"
                  carText2="Our experts will help you with any doubts, queries, or concerns you may have, just like a friend!"
                />
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="cardSection01">
                <Card
                  carImage="/victor/searchByCourse.svg"
                  carText1="Search by Course"
                  carText2="What is the specialization you are
                   interested in? Check out the best options as 
                   per the courses of your interest through our
                    customizable checklist."
                />
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="cardSection01">
                <Card
                  carImage="/victor/searchByCountry.svg"
                  carText1="Search By Country"
                  carText2="What is the destination of your dreams? Check out all the details as per the country of your choice."
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
