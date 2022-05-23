import React from 'react';
import Image from 'next/image';
import { Button, section } from 'react-bootstrap';
import styles from '../export/Export.module.css'

export const Export = () => {
  return (
    <>
    <section className={`${styles.expertsSec} sectionGlobal`}>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 mx-auto">
                        <div class="row">
                            <div class="col-md-7 d-flex flex-column justify-content-center">
                                <h2>Talk to our Experts</h2>
                                <h2 className={`${styles.textOrange}`}> 1800-420-5757</h2>
                                <p>Got a question? call us!</p>
                                <p>We are here for you round the clock with our assistance for your driving career!</p>                               
                                <Button variant="primary" size="lg" className={`${styles.exportBtn}`}>
                                        Book Your 30 Mins Expert Career Advice
                                </Button>
                            </div>
                            <div class="col-md-5">
                                <div className={`${styles.expertsCard}`}>
                                    <ul class="list-unstyled d-flex flex-wrap">
                                        <li><Image width={169} height={169} src="/experts/e1.png" alt="collegevidya - Expert team 1"/></li>
                                        <li><Image width={169} height={169} src="/experts/e2.jpg" alt="collegevidya - Expert team 2"/></li>
                                        <li><Image width={169} height={169} src="/experts/e3.jpg" alt="collegevidya - Expert team 3"/></li>
                                        <li><Image width={169} height={169} src="/experts/e4.jpg" alt="collegevidya - Expert team 4"/></li>
                                        <li><Image width={169} height={169} src="/experts/e5.jpg" alt="collegevidya - Expert team 5"/></li>
                                        <li><Image width={169} height={169} src="/experts/e6.jpg" alt="collegevidya - Expert team 6"/></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    </>
  )
}


export default Export
