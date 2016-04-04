function startTime() {
    var twelveHour = false;
    var scale = "scale(1.0)";

    // ==== DO NOT MODIFY ANYTHING BELOW THIS LINE ==== //


    //GLOBAL VARIABLES
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    var meridiem = "";
    var dayNames = new Array(
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
    );
    var weekday = dayNames[today.getDay()];
    var date = today.getDate();
    var monthArray = new Array(
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december"
    );
var month = monthArray[today.getMonth()];


    //FORMATTING

    //changes for minutes less than 10
    if (min < 10) {
        min = "0" + min;
    }
    //assign meridiem before we mutate the hour
    if (twelveHour && hour >= 12) {
        meridiem = "pm";
    }
    if (twelveHour && hour < 12) {
        meridiem = "am";
    }

    //12 hour formatting
    if (twelveHour && hour === 0) {
        hour = 12;
    }
    if (twelveHour === true) {
        hour = hour % 12;
    }

    
    //24 hour formatting
    if (!twelveHour && hour < 10) {
        hour = "0" + hour;
    }


    //ASSIGNMENT STATEMENTS
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = min;
    document.getElementById('am-pm').innerHTML = meridiem;
    document.getElementById('weekday').innerHTML = weekday;
    document.getElementById('day').innerHTML = date;
    document.getElementById('month').innerHTML = month;
    document.getElementById('wrapper').style.transform = scale;

    //update time every .5 seconds
    setTimeout(function() {
        startTime();
    }, 500);
}
