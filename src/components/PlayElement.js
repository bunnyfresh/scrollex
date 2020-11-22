import React  from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStart, startInit , getTraceWidth } from '../modules/gameStore';
import styles from './style.module.css'; 

export default function PlayElement(props) {  

    
  const gStart = useSelector(getStart);
  const gTraceWidth = useSelector(getTraceWidth);
  const dispatch = useDispatch(); 
 

  return (
    <div className={styles.peWrapper} style={{ top: props.begin? (gStart ? '400px' : '200px') : '' , 
                                            left: props.begin? '50%' : '' , 
                                            transform: props.begin? 'translateX(-'+50+'px)' : '' }}>
        <div className={styles.pe+' '+styles.peRed} style={{backgroundColor: props.color ,  color: props.color}}
         onClick={() => dispatch(startInit())} > 
        <span style={{color: '#fff'}}>{(props.begin && !gStart) ? 'START' : ''}</span>

        
        </div>
        {gStart && (
            <div className={styles.trace} style={{height: gTraceWidth+'px'}} /> 
        )}
    </div>
    
  );
}
