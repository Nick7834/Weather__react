import React from 'react'
import styles from './GridW.module.scss';
import { Graphic } from '../Graphic/Graphic';


export const GridW = ({weatherAdd}) => {

  return (
    <div className={styles.grid}>

        <div className={`${styles.one} ${styles.ones}`}>

              <div className={styles.tops__infs}>
                  <div className={styles.top__main}>
                      <div className={styles.info__img_t}><img src="./public/cloudW.svg" alt="cloud" /></div>
                      <div className={styles.block__info_t}>cloud cover</div>
                  </div>
                  <div className={styles.title__infs}>{weatherAdd?.current?.cloud}%</div>
              </div>
              
              <div className={styles.tops__infs}>
                  <div className={styles.top__main}>
                      <div className={styles.info__img_t}><img src="./public/heat.svg" alt="cloud" /></div>
                      <div className={styles.block__info_t}>Heat index</div>
                  </div>
                  <div className={styles.title__infs}>{weatherAdd?.forecast?.forecastday[0].hour[`${(weatherAdd?.current?.last_updated).slice(11, -3).replace(/^0+/, '')}`]?.heatindex_c}°C</div>
              </div>

              <div className={styles.info}>
                      <div className={styles.info__img}><img src="./public/info.svg" alt="info" /></div>
                      <div className={styles.block__info}>last updated: {weatherAdd?.current?.last_updated}</div>
              </div>

        </div>
        
        <div className={`${styles.two} ${styles.twos}`}>

   
               <div className={styles.astroInfo}>
                <div className={styles.sun}>
                      <img className={styles.sun} src="./public/sunrise.svg" alt="sunrise" />
                      <div className={styles.sunInfo}>{weatherAdd?.forecast?.forecastday[0].astro.sunrise}</div>
                  </div>

                  <div className={styles.earth}></div> 
              
                  <div className={styles.sun}>
                      <img className={styles.sun} src="./public/sunset.svg" alt="sunset" />
                      <div className={styles.sunInfo}>{weatherAdd?.forecast?.forecastday[0].astro.sunset}</div>
                  </div>
               </div>

               <div className={styles.moons}>
                  <div className={styles.moon}>
                      <img className={styles.icon} src="./public/moon.svg" alt="svg" />
                      <div className={styles.main_inf}>
                        <div className={styles.moon__title}>Moon phases</div>
                        <div className={styles.moon_res}>{weatherAdd?.forecast?.forecastday[0].astro.moon_phase}</div>
                      </div>
                  </div>
      
                  <div className={styles.moon}>
                      <img className={styles.icon} src="./public/moonI.svg" alt="svg" />
                      <div className={styles.main_inf}>
                        <div className={styles.moon__title}>Moon illumination</div>
                        <div className={styles.moon_res}>{weatherAdd?.forecast?.forecastday[0].astro.moon_illumination}%</div>
                      </div>
                  </div>
               </div>

        </div>

        <div className={`${styles.three} ${styles.threes}`}>
              <div className={styles.block}>
                 <div className={styles.blocks}>
                  <img className={styles.icon} src="./public/minT.svg" alt="icon" />
                    <div className={styles.flex}>
                      <div className={styles.name}>Min temp</div>
                      <div className={styles.result}>{weatherAdd?.forecast?.forecastday[0].day.mintemp_c}°C</div>
                    </div>
                  </div>

                  <div className={styles.blocks}>
                    <img className={styles.icon} src="./public/maxT.svg" alt="icon" />
                      <div className={styles.flex}>
                        <div className={styles.name}>Max temp</div>
                        <div className={styles.result}>{weatherAdd?.forecast?.forecastday[0].day.maxtemp_c}°C</div>
                      </div>
                </div>
              </div>

              <div className={styles.block}>
                <div className={styles.blocks}>
                  <img className={styles.icon} src="./public/avT.svg" alt="icon" />
                    <div className={styles.flex}>
                        <div className={styles.name}>avgtemp temp</div>
                        <div className={styles.result}>{weatherAdd?.forecast?.forecastday[0].day.avgtemp_c}°C</div>
                    </div>
                </div>

                <div className={styles.blocks}>
                  <img className={styles.icon} src="./public/vis.svg" alt="icon" />
                    <div className={styles.flex}>
                      <div className={styles.name}>avgvis km</div>
                      <div className={styles.result}>{weatherAdd?.forecast?.forecastday[0].day.avgvis_km} km</div>
                    </div>
                </div>
              </div>
        </div>

        <div className={`${styles.four} ${styles.fours}`}>
            <div className={styles.clockG}>
              <img src="./public/clock.svg" alt="clock" />
              <div className={styles.infoG}>24-hour forecast</div>
            </div>

            <div className={styles.graphic}>
              <Graphic graphicAdd={weatherAdd} />
            </div>

        </div> 

        <div className={styles.infoDay}>
          <div className={styles.title}>AIR CONDITIONS</div>

          <div className={styles.main__f}>
              <div className={styles.info_weather}>
                  <img src="./public/feel.svg" alt="svg" />
                  <div className={styles.main_inf}>
                    <div className={styles.title_inf}>Real Feel</div>
                    <div className={styles.weather_res}>{weatherAdd?.current?.feelslike_c}°C</div>
                  </div>
              </div>

              <div className={styles.info_weather}>
                  <img src="./public/wind.svg" alt="svg" />
                  <div className={styles.main_inf}>
                    <div className={styles.title_inf}>Wind</div>
                    <div className={styles.weather_res}>{weatherAdd?.current?.wind_kph} KPH</div>
                  </div>
              </div>


              <div className={styles.info_weather}>
                  <img src="./public/rain.svg" alt="svg" />
                  <div className={styles.main_inf}>
                    <div className={styles.title_inf}>Chance of rain</div>
                    <div className={styles.weather_res}>{weatherAdd?.forecast?.forecastday[0].hour[`${(weatherAdd?.current?.last_updated).slice(11, -3).replace(0, '')}`]?.chance_of_rain}%</div>
                  </div>
              </div>

              <div className={styles.info_weather}>
                  <img src="./public/humidity.svg" alt="svg" />
                  <div className={styles.main_inf}>
                    <div className={styles.title_inf}>Humidity</div>
                    <div className={styles.weather_res}>{weatherAdd?.current?.humidity}%</div>
                  </div>
              </div>

              <div className={styles.info_weather}>
                  <img src="./public/uv.svg" alt="svg" />
                  <div className={styles.main_inf}>
                    <div className={styles.title_inf}>UV Index</div>
                    <div className={styles.weather_res}>{weatherAdd?.current?.uv}</div>
                  </div>
              </div>
          </div>

        </div>

    </div>
  )
}
