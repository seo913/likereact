// axios 쓰려면 npm i axios 사용해야함

import { useEffect, useState } from "react";
import {
  FaSun,
  FaCloudSun,
  FaCloud,
  FaCloudMeatball,
  FaCloudSunRain,
  FaCloudShowersHeavy,
  FaPooStorm,
  FaSnowflake,
  FaSmog,
} from "react-icons/fa";
import axios from "axios";

const weatherIcon = {  //날씨코드에 맡게 각각 해당하는 날씨 아이콘 생성
  "01": <FaSun size={96} />,
  "02": <FaCloudSun size={96} />,
  "03": <FaCloud size={96} />,
  "04": <FaCloudMeatball size={96} />,
  "09": <FaCloudSunRain size={96} />,
  10: <FaCloudShowersHeavy size={96} />,
  11: <FaPooStorm size={96} />,
  13: <FaSnowflake size={96} />,
  50: <FaSmog size={96} />,
};

function Weather() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [weatherInfo, setWeatherInfo] = useState();

  const getGeolocation = () => { //위치정보를 가져오기
    navigator.geolocation.getCurrentPosition(  //위치정보동의하면 포지션이 실행
      (position) => {
        setLat(position.coords.latitude); 
        setLon(position.coords.longitude);
      },
      () => { //동의안하면 위치정보동의해야한다해야함
        alert("위치 정보에 동의 해주셔야 합니다.");
      }
    );
  };

  const getWeatherInfo = async () => {  //위치정보를 토대로 날씨를가져오기
    try {
      const response = await axios.get( //.env 파일을 만들어서 REACT_APP_WEATHER_API=api값을 담아두고 안보이게하기위해 그리고 깃이그노도 env추가
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`
      );

      if (response.status !== 200) {
        alert("날씨 정보를 가져오지 못했습니다.");

        return;
      }

      console.log(response.data);
      setWeatherInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => { //디펜던시
    getGeolocation();
  }, []);

  useEffect(() => { //렛 롱이 필요함 이 함수를 시작하려면 if를 사용해야함
    if (!lat || !lon) return;

    getWeatherInfo();
  }, [lat, lon]);

  useEffect(() => console.log(lat), [lat]); 
  useEffect(() => console.log(lon), [lon]);
  useEffect(() => console.log(process.env.REACT_APP_WEATHER_API), []);

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      {weatherInfo ? (
      <div className="flex flex-col justify-center items-center">
        {weatherIcon[weatherInfo.weather[0].icon.substring(0, 2)]} 
        <div className="mt-8 text-2xl">{weatherInfo.name}, {Math.round(weatherInfo.main.temp *10)/10} ℃</div>
      </div>
      ):( 
        "날씨 정보를 로딩중입니다 ..."
      )}
      </div>
  );
}

export default Weather;