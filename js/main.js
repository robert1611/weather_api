let button = document.querySelector('#search');
let inputValue = document.querySelector('.inputValue');
let name = document.querySelector('.name');
let humidity = document.querySelector('.humidity');
let tempMax = document.querySelector('.temp_max');
let tempMin = document.querySelector('.temp_min');
let forecast = document.querySelector('.forecast');
console.log('Hello World')

let items = document.getElementsByClassName('list-group-item');
//items[0] = document.querySelector('inputValue');
items[1].style.backgroundColor = "red";
//items[2] = document.querySelector('.temp_max')
items[3].style.backgroundColor = "blue";
items[1].style.color = "white";
items[3].style.color = "white";
items[5].style.backgroundColor = "teal";
items[5].style.color = "white";
items[7].style.backgroundColor = "green";
items[7].style.color = "white";



console.log('https://api.openweathermap.org/data/2.5/weather?q=' +inputValue.value+ '&appid=9d88ca5c0807959bab9a44b971018b1b')
button.addEventListener('click',function(){
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' +inputValue.value+ '&appid=9d88ca5c0807959bab9a44b971018b1b')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        const nameValue = data.name;
        const tempMinValue = Math.floor(9/5*(parseFloat(data.main.temp_min) - 273) + 32);
        const tempMaxValue =  Math.floor(9/5*(parseFloat(data.main.temp_max) - 273) + 32);
        const humidityValue = data.main.humidity;
        const forecastValue = data.weather[0].description;
//F = 9/5(K - 273) + 32
        name.innerHTML =  nameValue;
        tempMax.innerHTML =   tempMaxValue;
        tempMin.innerHTML =  tempMinValue;
        humidity.innerHTML =  humidityValue; 
        forecast.innerHTML =  forecastValue;
    });
    
});


//.catch(err => alert("Wrong city name!"))

//})

