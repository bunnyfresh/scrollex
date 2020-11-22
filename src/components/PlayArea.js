import React  from 'react';
import styles from './style.module.css'; 

export default function PlayArea(props) { 

  return (
    <div className={styles.pa}> 
        {props.children}
    </div>
  );
}
