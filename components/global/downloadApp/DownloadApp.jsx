import React from "react";
import styles from "../downloadApp/DownloadApp.module.css";
import { Image, Button } from "react-bootstrap";

export const DownloadApp = () => {
  return (
    <>
      <section className={`${styles.downloadApp} sectionGlobal`}>
        <div className="container">
          <div className="row">
            <div className="col-md-5 text-center">
              <Image
                src="/video_mobile.png"
                width={384}
                height={683}
                alt="DownloadApp"
              />
            </div>
            <div className="col-md-7">
              <div className="headingOne downApp">
                <h1>
                  <span>Download</span> the <p>College Vidya App</p>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus voluptate unde eius optio consectetur maiores!
                </p>
                </div>

                <h3>Get the Link to Download the App</h3>
                <h5>Below fill Your Mobile Number.</h5>
                  <form action="/send-data-here" method="post" className={`${styles.frmBox}`}>
                    <span>+91</span>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Enter mobile no"
                      minLength="10"
                      maxLength="20"
                      className={`${styles.frmControl} form-control`}
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"                      
                    >
                      Send SMS
                    </Button>                   
                  </form>
                </div>
              
            </div>
          </div>
        
      </section>
    </>
  );
};

export default DownloadApp;
