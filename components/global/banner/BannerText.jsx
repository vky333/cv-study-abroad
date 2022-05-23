import React from 'react';
import {Carousel,section,Button} from 'react-bootstrap';
import styles from './Banner.module.css';
import Image from 'react-bootstrap/Image'


export const BannerText = (props) =>{
    return(
        <>            
            <Image className="d-block w-100 fluid zoom-in-zoom-out" width={2000} height={750} src={props.BannerTextCard.banImg} alt="First slide" />
            <Carousel.Caption className={`${styles.bannerTextCont}`}>
                <h5>{props.BannerTextCard.h5Text}</h5>
                <h1>{props.BannerTextCard.h1Text}</h1>
                {/* <div className={`${styles.banerBtnCont}`}>                   
                    <Button variant="primary" size="lg" className={`${styles.enrolBtn}`}>{props.BannerTextCard.BtnOne}</Button>
                </div> */}
            </Carousel.Caption>
            <div className='overlay'></div>
        </>
    )
}

export default BannerText;