import React from "react";
import styles from "../home/Home.module.css";
import Image from "next/image";
import CustomJourney from "../home/CustomJourney";
import { useState, useRef, useEffect } from "react";

export const JourneySection = () => {
  const [scrollTop, setscrollTop] = useState(0);
  const scrollSectionRef = useRef(null);

  const OnScroll = () => {
    if (scrollSectionRef.current.getBoundingClientRect().top < 0) {
      var distanceFromTop =
        scrollSectionRef.current.getBoundingClientRect().top;
      setscrollTop(
        Math.abs(distanceFromTop) / 10 > 100
          ? 100
          : Math.abs(distanceFromTop) / 10
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", OnScroll);
  }, []);

  return (
    <>
      <section className={`${styles.jourSection} sectionGlobal`}>
        <div className="container">
          <div className="headingOne">
            <h1>
              Perks of Starting{" "}
              <div>
                <span>your Journey with us</span>
              </div>
            </h1>
            <div>
              This section would highlight the benefits to a user of our
              platform.
            </div>
          </div>
          

          <div className={styles.slideContainer}>
          <div className={`${styles.journey_progress} d-none d-sm-block`}>
            <div
              ref={scrollSectionRef}
              className={styles.active_progress}
              style={{ height: `${scrollTop}%` }}
            ></div>
          </div>

          <div className={`${styles.slideBox01}`}>

           

            <CustomJourney
              Heading="WE COMPILE -"
              HeadingSpan="YOU DECIDE!"
              Parragraph="With our Easy - Customised AI-Based Search options, 
              we will ensure that without many clicks and simple inputs, 
              you get your dream Destination & Course that fits you best."
              JourneyImage="/victor/journey/1.png"
            />
          </div>

          <div className={`${styles.slideBox02}`}>
            <CustomJourney
              Heading="Analyse Your"
              HeadingSpan=" Return on Investment"
              Parragraph="We understand you want to ensure your future! Wherein,
              you can analyse & compare the best return of investment
               for the time, money & effort you are willing to commit."
              JourneyImage="/victor/journey/2.png"
            />
          </div>

          <div className={`${styles.slideBox03}`}>
            <CustomJourney
              Heading="Go ahead &"
              HeadingSpan=" Compare it!"
              Parragraph="Comparing your options is a tedious task. Unlike other platforms,
              we will assist you in comparing universities and courses as per
               the duration, curriculum, features, ROIs, and so on. 
               We have it all sorted with our comparison portal.
               "
              JourneyImage="/victor/journey/3.png"
            />
          </div>

          <div className={`${styles.slideBox04}`}>
            <CustomJourney
              Heading="Empower your studies with the"
              HeadingSpan=" International Accelerator Program"
              Parragraph="Get the best assistance for your academic and English-proficiency 
              requirements with the International Accelerator program that prepares
               you for your dream of studying abroad."
              JourneyImage="/victor/journey/4.png"
            />
          </div>

          <div className={`${styles.slideBox05}`}>
            <CustomJourney
              Heading="Still confused?"
              HeadingSpan=" Talk to Experts!"
              Parragraph="Are you still sceptical and want some good advice? Guess What?! You are just a few clicks away from our 
              Experts who would love to clear any sort of confusion you may have through our Interactive Platform."
              JourneyImage="/victor/journey/5.png"
            />
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JourneySection;
