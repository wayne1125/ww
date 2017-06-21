import Vue from 'vue'

Vue.filter('filterNormalTime', function(data) {
	var dateObj = new Date(data);
	var year = dateObj.getFullYear();
	var month = (dateObj.getMonth() + 1) < 10 ? "0" + (dateObj.getMonth() + 1) : dateObj.getMonth() + 1;
	var day = dateObj.getDate() < 10 ? "0" + dateObj.getDate() : dateObj.getDate();
	var hours = dateObj.getHours() < 10 ? "0" + dateObj.getHours() : dateObj.getHours();
	var mins = dateObj.getMinutes() < 10 ? "0" + dateObj.getMinutes() : dateObj.getMinutes();
	var seconds = dateObj.getSeconds() < 10 ? "0" + dateObj.getSeconds() : dateObj.getSeconds();
	var date = year + '-' + month + '-' + day + " " + hours + ":" + mins;
	return date;
})

Vue.filter('filterDistanceFormat', function(data) {
	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var now = new Date().getTime();
	var diffValue = now - data;
	var result = "去年";
	if(diffValue < 0) {
		return;
	}
	var monthC = diffValue / month;
	var weekC = diffValue / (7 * day);
	var dayC = diffValue / day;
	var hourC = diffValue / hour;
	var minC = diffValue / minute;
	if(monthC >= 1) {
		result = "" + parseInt(monthC) + "月前";
	} else if(weekC >= 1) {
		result = "" + parseInt(weekC) + "周前";
	} else if(dayC >= 1) {
		result = "" + parseInt(dayC) + "天前";
	} else if(hourC >= 1) {
		result = "" + parseInt(hourC) + "小时前";
	} else if(minC >= 1) {
		result = "" + parseInt(minC) + "分钟前";
	} else
		result = "刚刚";
	return result;
})

Vue.filter('filterMatchStates', function(data) {
	for(var i in global.gameStateArry){
		if(data == global.gameStateArry[i].value){
			return global.gameStateArry[i].label;
		}
	}
	
	return date;
})