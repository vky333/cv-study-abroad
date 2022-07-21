import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './Banner.module.css';
import BannerText from '../banner/BannerText';
import BannerDetailContent from '../banner/BannerDetailContent'


const BannerImage = () => {

    const [activeSlide, setActiveSlide] = useState(0);

    const bannerContDynamic = [
        {
            id: 0,
            banImg: "/banner/suggestUniversity/banner1.jpg",
            h1Text: "Your dream to Graduate Internationally starts here ",
            BtnOne: "Explore our programs",
            h5Text: ""
        },
        {
            id: 1,
            banImg: "/banner/suggestUniversity/banner2.jpg",
            h1Text: "Compare your University Options like never before",
            BtnOne: "Explore our programs",
            h5Text: ""
        },
        {
            id: 2,
            banImg: "/banner/suggestUniversity/banner3.jpg",
            h1Text: "We plan according to your goals and aspirations",
            BtnOne: "Explore our programs",
            h5Text: ""
        },
        {
            id: 3,
            banImg: "/banner/suggestUniversity/banner4.jpg",
            h1Text: "Get Expert Guidance on finding the best destination to study",
            BtnOne: "Explore our programs",
            h5Text: ""
        }
    ]

    return (
        <section className='banerSection'>

            <div className={`${styles.bannerContainer}`}>
                <Carousel onSelect={(selectedIndex, e) => setActiveSlide(selectedIndex)} fade>
                    {bannerContDynamic.map(bannercard =>
                        <Carousel.Item key={bannercard.id}>
                            <BannerText BannerTextCard={bannercard} />
                            <div className='overlay'></div>
                        </Carousel.Item>
                    )}
                    
                </Carousel>
                

            </div>
            {/* <BannerDetailContent activeSlide={activeSlide} /> */}
           
        </section>
    )
}

export default BannerImage;