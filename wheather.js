let weatherResult=document.getElementById("weatherresult")
        let searchbutton=document.getElementById("buttons");

        searchbutton.addEventListener("click",()=>{
              let usercity=document.getElementById("cityinput").value;
              if(!usercity){
                weatherResult.innerHTML="<p> PLEASE ENTER The  CITY NAME !! 😊</p>"
                alert("PLEASE ENTER The  CITY NAME !! 😊");
                return
              }     
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${usercity}&appid=4d09e6ea6ece2ebc51bba3eea2c5432c&units=metric`)
        .then(apidata => apidata.json())
        .then(fectingdata=>{
            console.log(fectingdata)
            if(fectingdata.cod ==="404")
            {
              weatherResult.innerHTML="<p> CITY NOT FOUND !!</p>"
              setTimeout(()=>{
                alert("Plese Enter the Valid CIty!!😊")
                 weatherResult.innerHTML="<p>Plese Enter the Valid CIty!!</p>"
              },2000)
              return
        }
        else{

           
                weatherResult.innerHTML="<h5>FECTING THE WEATHER UPADTES...</h5>"
             setTimeout(()=>{
            weatherResult.innerHTML=`<h3>${fectingdata.name} </h3>
                                        <p>🌡️ Temperature: ${fectingdata.main.temp}°C</p>
                                        <p>💧 Humidity: ${fectingdata.main.humidity}%</p>
                                        <p> 🌤️Weather: ${fectingdata.weather[0].main}</p>
                                        <p>🌥️ Clouds: ${fectingdata.clouds.all}</p>
                                        <p>🌪️ Wind speed: ${fectingdata.wind.speed}</p>
                                        <p>🗺️latitude: ${fectingdata.coord.lat}</p>
                                        <p>🌐longitude: ${fectingdata.coord.lon}</p>`                      
             },3000)
        }

    });
 });