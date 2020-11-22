import React  from 'react';
import styles from './style.module.css';
import header from '../assets/header.svg';
import logo from '../assets/logo.svg'; 
import { useSelector } from 'react-redux';
import { getStart , getScore } from '../modules/gameStore';
import Destantion from './Destantion';

export default function Header() { 
  
  const gStart = useSelector(getStart);
  const gScore = useSelector(getScore);

  return (
    
    <header> 
      <div className={styles.hideZone+" "+(gStart ? styles.hide  : '')}>
        <img src={header} className={styles.headerBG} />
        <div className={styles.headerInfo}>
          <img src={logo} className={styles.logo} alt="logo" /> 
          <p className={styles.score}>YOUR SCORE: 0</p>
        </div> 
      </div>
      <div className={styles.hideZone+" "+(gStart ?  '' :  styles.hide  )}>
          <var className={styles.mainScore}>{gScore || 0}</var>
          <Destantion />
      </div>
    </header>
  );
}
