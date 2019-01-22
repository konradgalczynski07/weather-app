class UI {
    constructor() {
        this.location = document.getElementById('w-location')
        this.desc = document.getElementById('w-desc')
        this.string = document.getElementById('w-string')
        this.icon = document.getElementById('w-icon')
        this.humidity = document.getElementById('w-humidity')
        this.wind = document.getElementById('w-wind')
        this.clouds = document.getElementById('w-clouds')
        this.pressure = document.getElementById('w-pressure')
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = `Temp: ${weather.main.temp} C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
        this.wind.textContent = `Wind: ${weather.wind.speed} meter/sec`;
        this.clouds.textContent = `Clouds: ${weather.clouds.all} %`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
    }
}