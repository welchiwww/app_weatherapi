document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("searchWeather").addEventListener("click", function(){
        let temp, location, hum, feelslike_c, last_updated;
        let city = document.getElementById("city").value;
        let url = "https://api.weatherapi.com/v1/current.json?key=69ed7b91ab4b4d4f9f282327242604&q=$" + city;
        fetch (url)
        .then(response => {
            if (!response.ok){
                throw new Error(response.status);
            }
            return response.json();
                
        })
        .then(data => {
            location = data.location.name;
            temp = data.current.temp_c;
            hum = data.current.humidity;
            feelslike_c = data.current.feelslike_c;
            last_updated = data.current.last_updated;
            document.getElementById("location").innerText = location;
            document.getElementById("temp").innerText = temp + "°C";
            document.getElementById("hum").innerText = hum + "%";
            document.getElementById("feels_like_c").innerText = feelslike_c + "°C";
            document.getElementById("last_updated").innerText = last_updated;
        })
        .catch(error => {
            alert("Город не найден!");
        });
    });
});