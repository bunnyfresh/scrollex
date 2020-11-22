import React  from 'react';
import { useSelector } from 'react-redux';
import styles from './style.module.css'; 
import {  getDestination } from '../modules/gameStore';

export default function Destantion(props) {  
    const gDestination = useSelector(getDestination);
    return (
        <div className={styles.destantionWrapper}> 
            <div className={styles.destantionLine} /> 
            
            <div className={styles.destantionItem} style={{backgroundColor:  'red' , top: gDestination+'%'}}/> 
        </div>
    );
}
