import React from 'react'
import styles from './Main.module.scss'

export const Main = ({add, times, icon}) => {

  return (
    
    <div className={styles.main}>

        <div className={styles.block}>
            <div className={styles.mains}>
                <div className={styles.city}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 2C10.0307 2 6 5.91875 6 10.75C6 17.3125 15 27 15 27C15 27 24 17.3125 24 10.75C24 5.91875 19.9693 2 15 2ZM15 13.875C13.2257 13.875 11.7857 12.475 11.7857 10.75C11.7857 9.025 13.2257 7.625 15 7.625C16.7743 7.625 18.2143 9.025 18.2143 10.75C18.2143 12.475 16.7743 13.875 15 13.875Z" fill="white"/>
                    </svg>
                    <div className={styles.city_name}>{add?.location?.name} | {add?.location?.country}</div>
            </div>
            
                <div className={styles.type}>{add?.current?.condition?.text}</div>
            </div>

            <div className={styles.img__mob}>
               <img className={styles.icons} src={icon} alt="icons" />
            </div>

           <div className={styles.weather}>
                <div className={styles.w_t}>{add?.current?.temp_c}°C</div>
                <div className={styles.data}>{times?.day_of_week} | {times?.day}-{times?.month}-{times?.year} {times?.datetime?.slice(11, -3)}</div>
           </div>
        </div>

        <div className={styles.img}>
               <img className={styles.icons} src={icon} alt="icons" />
        </div>
 
    </div>
    
  )
}
