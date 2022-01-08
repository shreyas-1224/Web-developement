const getCurrentTime = () => {
    var now = new Date();
    var month = now.getMonth();
    var date = now.getDate();
    var year = now.getFullYear();
    var day = now.getDay() - 1;
    var hours = now.getHours();
    var mins = now.getMinutes();
    let am_pm = "AM" ;

    const week = [ "monday" , "tuesday" , "wednesday" , "thursday" , "friday" , "saturday" , "sunday"]; 
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    if(hours > 11){
        hours -= 12 ; 
        am_pm = "PM";
    }

    if(mins < 10){
        mins = "0" + mins;
    }
    
    $('#day').text(week[day].toUpperCase());
    $("#date").text(`${months[month].toUpperCase()} - ${date}`);
    
}

$("document").ready(getCurrentTime);

// first get the value from input . avoid refreshing after pressing button.

$('.sub').on('click', (event) => {
    event.preventDefault();
    var search = document.querySelector('#input_name').value;
    // now main tast. use api. lets use aync await.

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8e7c4c0021d5e94d2aab790ec8b5416c`;
    
    const getTemp = async() => {
        try {
            let data = await fetch(api);
            let newdata = await data.json();
            const arr = [newdata];
            
            // replacing data on onput
            $('.city_name').text(`${arr[0].name} , ${arr[0].sys.country}`);
            $('#main_temperature').text(`${(arr[0].main.temp - 273.15).toFixed(2)} °C`);
            $('.weather_img').html("<i class='fas  fa-cloud-rain fa-6x'></i>");
        
            
        } catch (error) {
            $('#main_temperature').text("please enter a valid city name");
        }
    }

    getTemp();

});