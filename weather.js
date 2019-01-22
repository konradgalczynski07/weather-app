class Weather {
    constructor(city) {
        this.apiKey = '739d09fc21ecba90cf05c741cdb28c68';
        this.city = city;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    changeLocation(city) {
        this.city = city;
    }
}