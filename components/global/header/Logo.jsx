import React from 'react';
import styles from '../header/Header.module.css';
import Image from 'next/image';

export const Logo = () => {
  return (
    <>
    <div className={`${styles.abroadLogo} logobox`}>
        <Image src="/logos/abroad-Logo.png" width={124} height={66} alt="abroadLogo"/>
        <span className={`${styles.logCom} com`}>com</span>
    </div>    
    </>
  )
}

export default Logo
