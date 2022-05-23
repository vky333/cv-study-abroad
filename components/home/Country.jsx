import Link from "next/link";
import React from "react";
import styles from "../home/Home.module.css";
import { section, Carousel } from "react-bootstrap";

export const Country = () => {
  return (
    <>
      <section className={`${styles.CountryContainer} sectionGlobal`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-2 text-center headingOne">
              <h1>
                Studying <span>Abroad Destinations</span>
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
                          <h3 className={`${styles.cardTitle}`}>
                            <a>Universities in USA</a>
                          </h3>

                          <div className={`${styles.cardText}`}>
                            <ul>
                              <li>Johnson & Wales University </li>
                              <li>Clark University </li>
                              <li>Yeshiva University</li>
                              <li>Northern Arizona University</li>
                              <li>Case Western Reserve University</li>
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
                          <h3 className={`${styles.cardTitle}`}>
                            <a>Universities in UK</a>
                          </h3>
                          <div className={`${styles.cardText}`}>
                            <ul>
                              <li>Keele University </li>
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
                          <h3 className={`${styles.cardTitle}`}>
                            <a>Universities in Germany</a>
                          </h3>
                          <div className={`${styles.cardText}`}>
                            <ul>
                              <li>
                                International University of Applied Science{" "}
                              </li>
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
                          <h3 className={`${styles.cardTitle}`}>
                            <a>Universities in Canada</a>
                          </h3>
                          <div className={`${styles.cardText}`}>
                            <ul>
                              <li>University of Canada West</li>
                              <li>Yorkville University</li>
                              <li>Carleton University</li>
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
                          <h3 className={`${styles.cardTitle}`}>
                            <a>Universities in Australia</a>
                          </h3>
                          <div className={`${styles.cardText}`}>
                            <ul>
                              <li>Deakin University</li>
                              <li>Jame Cook University</li>
                              <li>Torrens University</li>
                              <li>University of Canberra</li>
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
                          <h3 className={`${styles.cardTitle}`}>
                            <a>Universities in Ireland</a>
                          </h3>

                          <div className={`${styles.cardText}`}>
                            <ul>
                              <li>Dundalk Institute of Technology </li>                              
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
                          <h3 className={`${styles.cardTitle}`}>
                            <a>Universities in USA</a>
                          </h3>

                          <div className={`${styles.cardText}`}>
                            <ul>
                              <li>Johnson & Wales University </li>
                              <li>Clark University </li>
                              <li>Yeshiva University</li>
                              <li>Northern Arizona University</li>
                              <li>Case Western Reserve University</li>
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
                          <h3 className={`${styles.cardTitle}`}>
                            <a>Universities in UK</a>
                          </h3>
                          <div className={`${styles.cardText}`}>
                            <ul>
                              <li>Keele University </li>
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
                          <h3 className={`${styles.cardTitle}`}>
                            <a>Universities in Germany</a>
                          </h3>
                          <div className={`${styles.cardText}`}>
                            <ul>
                              <li>
                                International University of Applied Science{" "}
                              </li>
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
                          <h3 className={`${styles.cardTitle}`}>
                            <a>Universities in Canada</a>
                          </h3>
                          <div className={`${styles.cardText}`}>
                            <ul>
                              <li>University of Canada West</li>
                              <li>Yorkville University</li>
                              <li>Carleton University</li>
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
