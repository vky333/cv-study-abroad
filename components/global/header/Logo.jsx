import React from 'react';
import styles from '../header/Header.module.css';
import Image from 'next/image';

export const Logo = () => {
  return (
    <>
    <div className={`${styles.abroadLogo} logobox`}>
        <Image src="/logos/abroad-Logo.png" width={150} height={80} alt="abroadLogo"/>
        <span className={`${styles.logCom} com`}>com</span>
    </div>    
    </>
  )
}

export default Logo
