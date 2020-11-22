import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style.module.css'; 
import {  setTraceWidth , setScore, getStart} from '../modules/gameStore';

export default function PlayArea(props) { 
    let stmax = 0;
    const dispatch = useDispatch();
    const gStart = useSelector(getStart);

    const checkScrollSpeed = (function(settings){
        settings = settings || {};
    
        var lastPos, newPos, timer, delta, 
            delay = settings.delay || 50; // in "ms" (higher means lower fidelity )
    
        function clear() {
          lastPos = null;
          delta = 0;
        }
    
        clear();
    
        return function(){
          newPos = window.scrollY;
          if ( lastPos != null ){ // && newPos < maxScroll 
            delta = newPos -  lastPos;
          }
          lastPos = newPos;
          clearTimeout(timer);
          timer = setTimeout(clear, delay);
          return delta;
        };
    })();

    const scrollHandler = e => {  
        if(gStart){ 
            let st = window.pageYOffset || document.documentElement.scrollTop; 
            // console.log(stmax )
            if(st>stmax){
                stmax=st

                const ss = Math.ceil(checkScrollSpeed()); 

                if(ss > 0) {
                    const score = ss * 10;
                    dispatch(setTraceWidth(score));
                    dispatch(setScore(score));
                }
            
            }else{ 
                window.scrollTo({
                    top:  stmax 
                }); 
            }
        }  
    }

    document.addEventListener('scroll' , scrollHandler)

    return (
        <div className={styles.pa} style={{height: gStart ? 30000 : 'auto' }}> 
            {props.children}
        </div>
    );
}
