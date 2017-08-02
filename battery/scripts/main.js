var app = new Vue({
	el: '#app',
	data: {
		percent: 0,
		cycles: 0,
		isCharging: false,
		updatedInfo: false
	}
});

var si = require('systeminformation');

function updateData(){
	si.battery(function (data) {
		app.updatedInfo = false;
		app.percent = data.percent;
		app.isCharging = data.ischarging;
		app.cycles = data.cyclecount;

		setTimeout(function(){
			app.updatedInfo = true;
		}, 1000);
	});
}

updateData();

setInterval(updateData, (10 * 1000));