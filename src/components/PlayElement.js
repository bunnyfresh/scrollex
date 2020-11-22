import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStart, startInit } from '../modules/gameStore';
import styles from './style.module.css'; 

export default function PlayElement(props) {  

    
  const gStart = useSelector(getStart);
  const dispatch = useDispatch(); 

  return (
    <div className={styles.pe+' '+styles.peRed} style={{backgroundColor: props.color ,
                                       top: props.begin? (gStart ? '400px' : '200px') : '' , 
                                       left: props.begin? '50%' : '' , 
                                       transform: props.begin? 'translateX(-'+50+'px)' : '',
                                       color: props.color}}
         onClick={() => dispatch(startInit())}
                                       > 
        <span style={{color: '#fff'}}>{(props.begin && !gStart) ? 'START' : ''}</span>

        {gStart && (
            <div className={styles.trace} /> 
        )}
    </div>
  );
}
