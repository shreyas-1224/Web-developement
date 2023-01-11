// date and time object

const getCurrentTime = () => {
    var now = new Date();
    var month = now.getMonth();
    var date = now.getDate();
    var year = now.getFullYear();
    var day = now.getDay() - 1;
    var hours = now.getHours();
    var mins = now.getMinutes();
    let am_pm = "AM" ;

    const week = [ "mon" , "tue" , "wed" , "thu" , "fri" , "sat" , "sun"]; 
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    if(hours > 11){
        hours -= 12 ; 
        am_pm = "PM";
    }

    if(mins < 10){
        mins = "0" + mins;
    }
    
    return (`${week[day].toUpperCase()} | ${months[month].toUpperCase()} - ${date} | ${hours} : ${mins}  ${am_pm} `);
}

$(".time_date").text(getCurrentTime());



