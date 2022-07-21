import React from 'react';
import styles from '../banner/Banner.module.css'

export const BannerDetailContent = (props) => {

    return (
        <>
            <div className={`${styles.progressBarContainer}`}>
                <div>
                
                    <div className={`${styles.progressBar}`}>
                        {props.activeSlide === 0 ?
                            <div className={`${styles.progAnimation}`}></div>
                            :
                            null
                        }
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                </div>
                <div>
                    <div className={`${styles.progressBar}`}>
                        {props.activeSlide === 1 ?
                            <div className={`${styles.progAnimation}`}></div>
                            :
                            null
                        }
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                </div>
                <div>
                    <div className={`${styles.progressBar}`}>
                        {props.activeSlide === 2 ?
                            <div className={`${styles.progAnimation}`}></div>
                            :
                            null
                        }
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                </div>
                <div>
                    <div className={`${styles.progressBar}`}>
                        {props.activeSlide === 3 ?
                            <div className={`${styles.progAnimation}`}></div>
                            :
                            null
                        }
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                </div>
                
            </div>
        </>
    )

}



export default BannerDetailContent;