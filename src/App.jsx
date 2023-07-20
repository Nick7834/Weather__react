import React, { useEffect, useMemo, useState } from 'react'
import { Main } from './components/display/Main/Main'
import { GridW } from './components/display/Grid/GridW'
import { Search } from './components/ul/Search/Search';
import { compile } from 'sass';

// img for api

import imgw from "./bd.js";
import condition from "./condition.js";
import iconw from './bd.icon';


function App() {

    const [weather, setWeather] = useState({});

    const [time, setTime] = useState({});

    // icons and background

    const [img, setImg] = useState('');
    const [icons, setIcons] = useState('');

    // active block 

    // const [active, setActive] = useState(false);

    // input value


    const [search, setSearch] = useState('')


    const soo = (s) => {
      setSearch(s)
    }



    // api main
  
      const apiKeys = 'ff7dc3a1cf2847a985692006231206';

      async function getCity(search) {
          const map = `http://api.weatherapi.com/v1/forecast.json?key=${apiKeys}&q=${search}`;
          const response = await fetch(map);
          const data = await response.json();

          data.error ? console.log(1) : console.log(2)

          if (data.error) {
            setWeather(data)
            setActive(true)
          } else {
              const info = condition.find(obj => obj.code === data.current.condition.code);
              const idData = data.current.is_day;
              const inf = data.current.is_day ? info.day : info.night;
              const indexW = imgw.imgsDN[idData][inf];
    
              const iconW = iconw.iconsDN[idData][inf];
    
              setIcons(iconW)
    
              setImg(indexW)
    
              return data
          }

         
      }

      useEffect(() => {
        const showWin = async e => {
      
          const searchs = 'Tula';
        
          // получаем данные с сервака
    
          if (!search) return;
        
          const data = await getCity(search);

    
          setWeather(data)
        }
    
        showWin();
      }, [search]);


       // api dataTime 

       const apiTime = 'O1QhXyvYjoC4MsJ4L2KY0A==rQPw02wJBjwT20hj';

       async function getTimes(searchTimes) {
         const maps = `https://api.api-ninjas.com/v1/worldtime?city=${searchTimes}`;
         const settings = {
           method: 'GET',
           headers: {
             'X-Api-Key': apiTime,
           }
          };
         const response = await fetch(maps, settings);
         const data = await response.json();
   
          return data
      }

       useEffect(() => {
         const showTime = async e => {

          if (!search) return;

           const data = await getTimes(search);
     
           setTime(data)
         }

         showTime();
       }, [search]);


      // ip users 

      useEffect(() => {
        async function ipUsers() {
          let userIp = await fetch('https://api.db-ip.com/v2/free/self');
          let ipData = await userIp.json();
    
          return ipData.city    
        }
    
        const ipAll = async () =>  {
          const data = await ipUsers();
  
          const datas = await getCity(data);

          const dataTimes = await getTimes(data);
    
          setWeather(datas)
          setTime(dataTimes)
        }
    
        ipAll()
      }, []); 

      // Анимация, рефакторинг

  return (
    <div className='weathers'>
      <div className="container">
        <div className="weathrs__content">

          <div className="photo" style={{
             backgroundImage: `url(${img})`,
          }} ></div>

            <Search onChange={soo} />

            {weather === undefined ? <div className='error'>The city was not found!</div> : <div>
               <Main add={weather} times={time} icon={icons} />

               <GridW weatherAdd={weather} /> 
            </div>}

        </div>
      </div>
    </div>
  )

}

export default App
