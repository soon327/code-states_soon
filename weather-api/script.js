'use strict';

const main = document.querySelector('main');
const searchLine = document.querySelector('header input');
const searchBtn = document.querySelector('header .searchBtn');
const clearBtn = document.querySelector('header .clearBtn');

const setBackground = function (json) {
  const body = document.querySelector('body');

  let weatherId = json.weather[0].id;

  if (weatherId !== 800) {
    weatherId = parseInt(weatherId / 100);
  }

  let imageLink = weather_link_image[weatherId].image;
  body.style.backgroundImage = `url(${imageLink})`;
};

function renderData() {
  let cityNameId = searchLine.value;
  if (!cityNameId) {
    alert('도시명을 입력해 주세요.');
  } else {
    let API_URL_OpenWeatherMap = `http://api.openweathermap.org/data/2.5/weather?q=${cityNameId}&appid=88ddf3c2bc9383590b205c8cd22dce42&lang=kr`;

    fetch(API_URL_OpenWeatherMap)
      .then(function (resp) {
        return resp.json();
      })
      .then(function (json) {
        if (json.name === undefined) {
          alert('유효하지 않은 도시명입니다.');
        } else {
          let contentElement = document.createElement('div');
          contentElement.classList.add('content');
          main.appendChild(contentElement);

          let cityElement = document.createElement('div');
          cityElement.classList.add('city');
          cityElement.textContent = json.name;
          contentElement.appendChild(cityElement);

          let weatherElement = document.createElement('div');
          weatherElement.classList.add('weather');

          weatherElement.textContent = json.weather[0].description;
          contentElement.appendChild(weatherElement);

          let tempElement = document.createElement('div');
          tempElement.classList.add('temperature');

          tempElement.textContent = Math.round((json.main.temp - 273.15) * 10) / 10 + '°C';
          contentElement.appendChild(tempElement);

          let iconElement = document.createElement('div');
          iconElement.classList.add('icon');
          contentElement.appendChild(iconElement);

          let icon = document.createElement('img');
          icon.src = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${json.weather[0].icon}.svg`;
          iconElement.appendChild(icon);

          setBackground(json);
        }
      });
  }
}

const deleteAll = function () {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  const body = document.querySelector('body');
  body.style.backgroundImage = `url(./images/default.jpg)`;

  searchLine.value = '';
};

const init = function () {
  searchBtn.addEventListener('click', renderData);

  searchLine.addEventListener('keydown', function enterKey() {
    if (window.event.keyCode === 13) {
      renderData();
    }
  });

  clearBtn.addEventListener('click', deleteAll);
};

init();
