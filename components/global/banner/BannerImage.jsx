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
            banImg: "/banner/suggestUniversity/banner1.png",
            h1Text: "Your skills can determine your career path.",
            BtnOne: "Explore our programs",
            h5Text: "Start Learning "
        },
        {
            id: 1,
            banImg: "/banner/suggestUniversity/2.jpg",
            h1Text: "Work Intergrated Degree Program Certified Finance Executive",
            BtnOne: "Explore our programs",
            h5Text: "Start Learning "
        },
        {
            id: 2,
            banImg: "/banner/suggestUniversity/3.jpg",
            h1Text: "Certificate Program for Undergraduates",
            BtnOne: "Explore our programs",
            h5Text: "Start Learning "
        },
        {
            id: 3,
            banImg: "/banner/suggestUniversity/4.jpg",
            h1Text: "Work Intergrated Degree Program Certified Finance Executive",
            BtnOne: "Explore our programs",
            h5Text: "Start Learning "
        },
        {
            id: 4,
            banImg: "/banner/suggestUniversity/5.jpg",
            h1Text: "Work Intergrated Degree Program Certified Finance Executive",
            BtnOne: "Explore our programs",
            h5Text: "Start Learning "
        }
    ]

    return (
        <section className='banerSection'>

            <div className={`${styles.bannerContainer}`}>
                <Carousel onSelect={(selectedIndex, e) => setActiveSlide(selectedIndex)} fade>
                    {bannerContDynamic.map(bannercard =>
                        <Carousel.Item key={bannercard.id}>
                            <BannerText BannerTextCard={bannercard} />
                        </Carousel.Item>
                    )}
                </Carousel>
                

            </div>
            <BannerDetailContent activeSlide={activeSlide} />
            {/* <div className={`${styles.shadow}`}></div> */}
        </section>
    )
}

export default BannerImage;