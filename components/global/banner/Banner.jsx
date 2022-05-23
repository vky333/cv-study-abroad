import React from 'react'
import BannerImage from '../banner/BannerImage'
import styles from './Banner.module.css'

export const Banner = () => {
  return (
    <>
    <section className={`${styles.bannerSection}`}>
        <BannerImage/>
    </section>
    
    </>
  )
}


export default Banner