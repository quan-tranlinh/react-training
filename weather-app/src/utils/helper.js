// Defined helper
const reduceData = (weatherData) => {
  return (
    weatherData && weatherData.list.reduce((result, item) => {
      const dateWeather = item.dt_txt.slice(0, 10);

      if (result[dateWeather]) {
        result[dateWeather].push({
          id: item.dt,
          dt_txt: dateWeather,
          temp: item.main.temp,
          main: item.weather[0].main,
        });
      } else {
        result[dateWeather] = [{
          id: item.dt,
          dt_txt: dateWeather,
          temp: item.main.temp,
          main: item.weather[0].main,
        }];
      }
      return result;
    }, {})
  );
};

export default reduceData;
