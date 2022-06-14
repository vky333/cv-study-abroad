import Link from "next/link";
import React from "react";
import styles from "../home/Home.module.css";
import { section, Carousel } from "react-bootstrap";

export const Country = () => {
  return (
    <>
      <section className={`${styles.CountryContainer} contryJourney sectionGlobal`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-2 text-center headingOne">
              <h1>
                Studying{" "}
                <div>
                  <span>Abroad Destinations</span>
                </div>
              </h1>
              <div>Destinations you can reach with us!</div>
            </div>
            <Carousel>
              <Carousel.Item>
                <div className="col-md-12">
                  <div className={`${styles.ContAccordian}`}>
                    <div className={`${styles.box_01} ${styles.glBox} `}>
                      <div
                        className={`${styles.countryImg} ${styles.countryImage1}`}
                      >
                        <h1>USA</h1>
                      </div>
                      <div className={`${styles.choice}`}>
                        <div className={`${styles.cardBody}`}>
                          <h4 className={`${styles.cardTitle}`}>
                            <a>Universities in USA</a>
                          </h4>

                          <div className={`${styles.cardText}`}>
                            <ul>
                              <li>Johnson & Wales University </li>
                              <li>Clark University </li>
                              <li>Yeshiva University</li>
                              <li>Northern Arizona University</li>
                              <li>University of Bridgeport</li>
                              <li>Edgewood College</li>
                              <li>South Dakota State University</li>
                              <li>Golden Gate University</li>
                              <li>Troy University</li>
                            </ul>
                          </div>

                          {/* <Link href="#">
                        <a class="btn btn-primary">Read More</a>
                      </Link> */}
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.box_02} ${styles.glBox}`}>
                      <div
                        className={`${styles.countryImg} ${styles.countryImage1}`}
                      >
                        <h1>UK</h1>
                      </div>
                      <div className={`${styles.choice}`}>
                        <div className={`${styles.cardBody}`}>
                          <h4 className={`${styles.cardTitle}`}>
                            <a>Universities in UK</a>
                          </h4>
                          <div className={`${styles.cardText}`}>
                            <ul>
                              <li>Keele University</li>
                              <li>University of Plymouth</li>
                              <li>Shefflield Hallam University </li>
                              <li>University of Dundee</li>
                              <li>De Montfort University</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.box_03} ${styles.glBox}`}>
                      <div
                        className={`${styles.countryImg} ${styles.countryImage1}`}
                      >
                        <h1>Germany</h1>
                      </div>
                      <div className={`${styles.choice}`}>
                        <div className={`${styles.cardBody}`}>
                          <h4 className={`${styles.cardTitle}`}>
                            <a>Universities in Germany</a>
                          </h4>
                          <div className={`${styles.cardText}`}>
                            <ul>
                              <li>
                                International University of Applied Science
                              </li>
                              <li>GISMA Business School</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.box_04} ${styles.glBox}`}>
                      <div
                        className={`${styles.countryImg} ${styles.countryImage1}`}
                      >
                        <h1>Canada</h1>
                      </div>
                      <div className={`${styles.choice}`}>
                        <div className={`${styles.cardBody}`}>
                          <h4 className={`${styles.cardTitle}`}>
                            <a>Universities in Canada</a>
                          </h4>
                          <div className={`${styles.cardText}`}>
                            <ul>
                              <li>University of Canada West</li>
                              <li>Yorkville University </li>
                              <li>Trinity Western University</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.box_05} ${styles.glBox}`}>
                      <div
                        className={`${styles.countryImg} ${styles.countryImage1}`}
                      >
                        <h1>Australia</h1>
                      </div>
                      <div className={`${styles.choice}`}>
                        <div className={`${styles.cardBody}`}>
                          <h4 className={`${styles.cardTitle}`}>
                            <a>Universities in Australia</a>
                          </h4>
                          <div className={`${styles.cardText}`}>
                            <ul>
                              <li>Deakin University</li>
                              <li>Jame Cook University</li>
                              <li>Torrens University</li>
                              <li>University of Canberra</li>
                              <li>Russo Business School</li>
                              <li>Victoria University</li>
                              <li>Flinders University</li>
                              <li>Western Sydney University</li>
                              <li>Bond University</li>
                              <li>University of New South Wales</li>
                              <li>University of Queensland</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="col-md-12">
                  <div className={`${styles.ContAccordian}`}>
                    <div className={`${styles.box_06} ${styles.glBox} `}>
                      <div
                        className={`${styles.countryImg} ${styles.countryImage1}`}
                      >
                        <h1>Ireland</h1>
                      </div>
                      <div className={`${styles.choice}`}>
                        <div className={`${styles.cardBody}`}>
                          <h4 className={`${styles.cardTitle}`}>
                            <a>Universities in Ireland</a>
                          </h4>

                          <div className={`${styles.cardText}`}>
                            <ul>
                              <li>Dundalk Institute of Technology </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.box_04} ${styles.glBox}`}>
                      <div
                        className={`${styles.countryImg} ${styles.countryImage1}`}
                      >
                        <h1>Canada</h1>
                      </div>
                      <div className={`${styles.choice}`}>
                        <div className={`${styles.cardBody}`}>
                          <h4 className={`${styles.cardTitle}`}>
                            <a>Universities in Canada</a>
                          </h4>
                          <div className={`${styles.cardText}`}>
                            <ul>
                              <li>University of Canada West</li>
                              <li>Yorkville University </li>
                              <li>Trinity Western University</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${styles.box_02} ${styles.glBox}`}>
                      <div
                        className={`${styles.countryImg} ${styles.countryImage1}`}
                      >
                        <h1>UK</h1>
                      </div>
                      <div className={`${styles.choice}`}>
                        <div className={`${styles.cardBody}`}>
                          <h4 className={`${styles.cardTitle}`}>
                            <a>Universities in UK</a>
                          </h4>
                          <div className={`${styles.cardText}`}>
                            <ul>
                              <li>Keele University</li>
                              <li>University of Plymouth</li>
                              <li>Shefflield Hallam University </li>
                              <li>University of Dundee</li>
                              <li>De Montfort University</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.box_01} ${styles.glBox} `}>
                      <div
                        className={`${styles.countryImg} ${styles.countryImage1}`}
                      >
                        <h1>USA</h1>
                      </div>
                      <div className={`${styles.choice}`}>
                        <div className={`${styles.cardBody}`}>
                          <h4 className={`${styles.cardTitle}`}>
                            <a>Universities in USA</a>
                          </h4>

                          <div className={`${styles.cardText}`}>
                            <ul>
                              <li>Johnson & Wales University </li>
                              <li>Clark University </li>
                              <li>Yeshiva University</li>
                              <li>Northern Arizona University</li>
                              <li>University of Bridgeport</li>
                              <li>Edgewood College</li>
                              <li>South Dakota State University</li>
                              <li>Golden Gate University</li>
                              <li>Troy University</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.box_03} ${styles.glBox}`}>
                      <div
                        className={`${styles.countryImg} ${styles.countryImage1}`}
                      >
                        <h1>Germany</h1>
                      </div>
                      <div className={`${styles.choice}`}>
                        <div className={`${styles.cardBody}`}>
                          <h4 className={`${styles.cardTitle}`}>
                            <a>Universities in Germany</a>
                          </h4>
                          <div className={`${styles.cardText}`}>
                            <ul>
                              <li>
                                International University of Applied Science
                              </li>
                              <li>GISMA Business School</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Country;
