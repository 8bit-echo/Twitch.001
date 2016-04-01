function startTime(){
	var twelveHour = false;
	var scale = "scale(1.0)";

	// DO NOT MODIFY ANYTHING BELOW THIS LINE

	var today = new Date();
	var hour = today.getHours();
	var minute = today.getMinute();
	var meridiem = "";
	var dayNames = new Array(
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
		);
	var weekday = dayNames[today.getDay()];
	var date = today.getDate();
	var monthArray = new Array(
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
		);
	var month = monthArray[today.getMonth()];


	// FORMATTING

	if (minute < 10) {
		minute = "0" + minute;
	}

	if (twelveHour && hour >= 12){
		meridiem = "pm";
	}
	if (twelveHour && hour < 12){
		meridiem = "am";
	}

	// 12 hour time formatting
	if (twelveHour && hour === 0){
		hour = 12;
	}

	if (twelveHour){
		hour = hour % 12;
	}

	if (!twelveHour && hour < 10){
		hour = "0" + hour;
	}

	//Assignment statements
	




}