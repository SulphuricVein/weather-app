const inputBox = document.querySelector(".input-box");
const target = document.getElementById("target");
const btn = document.getElementById("btn");

const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "3d845b2b30b1f100ce889c4d77cc605d";

async function fetchData(city) {
  try {
    const response = await fetch(
      url + city + `&appid=${apiKey}` + `&units=metric`
    );
    const result = await response.json();
    console.log(result);

    target.innerHTML = `
    
    <img src='https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png'>
    <br>
    <h1>${result.main.temp} °C</h1>
    
    <h1>${result.name}</h1>
    
    <div id="last-row">
    <div id="humidity">
    <i class="fa-solid fa-water"></i>
    ${result.main.humidity}%
    <small>Humidity</small>
    </div>
    <div id="speed">
    <i class="fa-solid fa-wind"></i>
    ${result.wind.speed} Km/h
    <small>Speed</small>
    </div>
    </div>
    `;
  } catch (error) {
    console.error(error);
  }
}

btn.addEventListener("click", () => {
  fetchData(inputBox.value);
});
