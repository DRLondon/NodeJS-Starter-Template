window.addEventListener('load', () => {
    let lat
    let long

    let temperatureDescription = document.querySelector(".temperature-description")
    let temperatureDegree = document.querySelector(".temperature-degree")
    let locationTimezone = document.querySelector(".location-timezone")



    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`)


            const proxy = "https://cors-anywhere.herokuapp.com/"
            const owmapi = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d4183131e9b6c8630e8ff1505899ba7d`
            const darkskyapi = `${proxy}https://api.darksky.net/forecast/58d36b84d5c6b2e3a80c266e9d71d090/${latitude},${longitude}`

            console.log(darkskyapi)

            fetch(darkskyapi)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    console.log(data)
                    const { temperature, summary } = data.currently;

                    temperatureDegree.textContent = temperature
                    temperatureDescription.textContent = summary
                    locationTimezone.textContent = data.timezone
                })
        })
    }

    function setIcons(icon, iconID){
        const skycond = new skycons({color: "white"})
        // const currentIcon = 
    }
})