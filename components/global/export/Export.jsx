import React from 'react';
import Image from 'next/image';
import { Button, section } from 'react-bootstrap';
import styles from '../export/Export.module.css'

export const Export = () => {
  return (
    <>
    <section className={`${styles.expertsSec} sectionGlobal`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mx-auto">
                        <div className="row">
                            <div className="col-md-6 d-flex flex-column justify-content-center">
                                <h2>Talk to our Experts</h2>
                                <h2 className={`${styles.textOrange}`}> 1800-420-5757</h2>
                                <p>Got a question? call us!</p>
                                <p>We are here for you round the clock with our assistance for your driving career!</p>                               
                                <Button className={`${styles.exportBtn}`}>
                                        Book Your 30 Mins Expert Career Advice
                                </Button>
                            </div>
                            <div className="col-md-6">
                                <div className={`${styles.expertsCard}`}>
                                    <ul className="list-unstyled d-flex flex-wrap">
                                        <li><Image width={160} height={230} src="/experts/e1.png" alt="Expert"/></li>
                                        <li><Image width={160} height={230} src="/experts/e2.png" alt="Expert"/></li>
                                        <li><Image width={160} height={230} src="/experts/e3.png" alt="Expert"/></li>
                                        <li><Image width={160} height={230} src="/experts/e4.png" alt="Expert"/></li>
                                        <li><Image width={160} height={230} src="/experts/e5.png" alt="Expert"/></li>
                                        <li><Image width={160} height={230} src="/experts/e6.png" alt="Expert"/></li>
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
