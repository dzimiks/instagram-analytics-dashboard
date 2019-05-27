/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns number with given precision.
 *
 * @param value
 * @param exp
 * @returns {number}
 */
function setNumberPrecision(value, exp) {
	if (typeof exp === "undefined" || +exp === 0) {
		return Math.round(value);
	}

	value = +value;
	exp = +exp;

	if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
		return NaN;
	}

	// Shift
	value = value.toString().split("e");
	value = Math.round(+(value[0] + "e" + (value[1] ? (+value[1] + exp) : exp)));

	// Shift back
	value = value.toString().split("e");
	return +(value[0] + "e" + (value[1] ? (+value[1] - exp) : -exp));
}

/**
 * Make monochrome colors
 *
 * @type {Array}
 */
const pieColors = (function () {
	let colors = [];
	let base = "#328FFE";

	for (let i = 0; i < 7; i++) {
		// Start out with a darkened base color (negative brighten), and end
		// up with a much brighter color
		colors.push(Highcharts.Color(base).brighten((i - 3) / 10).get());
	}

	return colors;
}());

/**
 * Generates random date in given range.
 *
 * @param start
 * @param end
 * @returns {Date}
 */
function randomDate(start, end) {
	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const ageCategories = ["13-17", "18-24", "25-34", "35-44", "45-54", "55-64", "65+"];

if ($('#followers-chart').length) {
	Highcharts.chart('followers-chart', {
		chart: {
			type: "line"
		},

		title: {
			text: "Followers"
		},

		legend: {
			enabled: false
		},

		xAxis: {
			categories: ["11th Jan", "14th Jan", "18th Jan", "21st Jan", "25th Jan", "28th Jan", "18th Feb"]
		},

		yAxis: {
			title: {
				text: "Followers"
			}
		},

		plotOptions: {
			line: {
				dataLabels: {
					enabled: true
				},
				enableMouseTracking: true
			}
		},

		series: [{
			name: "Followers",
			lineWidth: 3,
			color: "#328FFE",
			data: [2089, 2457, 2782, 3055, 3498, 3850, 5286]
		}]
	});
}

if ($('#gained-and-lost-followers-chart').length) {
	Highcharts.chart('gained-and-lost-followers-chart', {
		chart: {
			type: 'column'
		},

		title: {
			text: 'Gained and Lost Followers'
		},

		legend: {
			enabled: true
		},

		xAxis: {
			categories: ['11th Jan', '14th Jan', '18th Jan', '21st Jan', '25th Jan', '28th Jan', '18th Feb']
		},

		yAxis: {
			title: {
				text: 'Followers'
			}
		},

		tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y}</b></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true
		},

		plotOptions: {
			column: {
				pointPadding: 0.2,
				borderWidth: 0,
				dataLabels: {
					enabled: true
				}
			},
			series: {
				stacking: 'normal'
			}
		},

		series: [{
			name: 'Gained Followers',
			color: '#328FFE',
			data: [234, 77, 77, 108, 100, 119, 176]

		}, {
			name: 'Lost Followers',
			color: '#F6AF6D',
			data: [-176, -58, -56, -163, -35, -40, -78]
		}]
	});
}

if ($('#followers-growth-chart').length) {
	Highcharts.chart('followers-growth-chart', {
		chart: {
			type: "column"
		},

		title: {
			text: "Growth of Total Followers"
		},

		legend: {
			enabled: false
		},

		xAxis: {
			categories: ["11th Jan", "14th Jan", "18th Jan", "21st Jan", "25th Jan", "28th Jan", "18th Feb"]
		},

		yAxis: {
			min: 0,
			title: {
				text: "Followers"
			}
		},

		tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y}</b></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true
		},

		plotOptions: {
			column: {
				pointPadding: 0.2,
				borderWidth: 0,
				dataLabels: {
					enabled: true
				}
			}
		},

		series: [{
			name: "Followers",
			color: "#328FFE",
			data: [234, 77, 77, 108, 100, 119, 176]
		}]
	});
}

if ($('#followings-chart').length) {
	Highcharts.chart('followings-chart', {
		chart: {
			type: "line"
		},

		title: {
			text: "Following"
		},

		legend: {
			enabled: false
		},

		xAxis: {
			categories: ["11th Jan", "14th Jan", "18th Jan", "21st Jan", "25th Jan", "28th Jan", "18th Feb"]
		},

		yAxis: {
			title: {
				text: "Following"
			}
		},

		plotOptions: {
			line: {
				dataLabels: {
					enabled: true
				},
				enableMouseTracking: true
			}
		},

		series: [{
			name: "Following",
			color: "#328FFE",
			lineWidth: 3,
			data: [2094, 2070, 2001, 2201, 2100, 1995, 3097]
		}]
	});
}

if ($('#gender-of-followers-chart').length) {
	Highcharts.chart('gender-of-followers-chart', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: "pie"
		},

		title: {
			text: "Gender of Followers"
		},

		tooltip: {
			pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
		},

		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: "pointer",
				dataLabels: {
					enabled: true
				},
				showInLegend: true
			}
		},

		series: [{
			dataLabels: {
				color: "white",
				distance: -35,
				formatter: function () {
					if (this.percentage !== 0) {
						return setNumberPrecision(this.percentage, 2) + "%"
					}
				}
			},
			name: "Gender of Followers",
			colorByPoint: true,
			innerSize: "50%",
			data: [{
				name: "Male",
				color: "#328FFE",
				y: 34.4
			}, {
				name: "Female",
				color: "#F6AF6D",
				y: 65.6
			}],
		}]
	});
}

if ($('#countries-map-chart').length) {
	Highcharts.chart('countries-map-chart', {
		chart: {
			map: "worldMap"
		},

		title: {
			text: "Countries of Followers"
		},

		mapNavigation: {
			enabled: false,
			enableDoubleClickZoomTo: false
		},

		colorAxis: {
			min: 1,
			max: 1000,
			type: "logarithmic"
		},

		series: [{
			data: [
				["rs", 1000],
				["us", 830],
				["in", 49],
				["ba", 32],
				["id", 34],
				["me", 323],
				["hr", 424],
				["ng", 4334],
				["it", 4],
				["ru", 5]
			],
			// joinBy: ["iso-a2", "countryCode"],
			name: "Countries of Followers",
			states: {
				hover: {
					color: "#e53935"
				}
			},
			tooltip: {
				pointFormat: "{point.name}: {point.value} followers"
			}
		}]
	});
}

if ($('#cities-chart').length) {
	Highcharts.chart('cities-chart', {
		chart: {
			type: "bar"
		},

		title: {
			text: "Cities of Followers"
		},

		xAxis: {
			categories: ["Belgrade", "NYC", "Madrid", "Paris", "Novi Sad"]
		},

		yAxis: {
			min: 0,
			title: {
				text: null
			}
		},

		tooltip: {
			pointFormat: "{series.name}: {point.y} <b>({point.percentage:.1f} %)</b>"
		},

		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true
				}
			}
		},

		legend: {
			enabled: false
		},

		series: [{
			color: "#328FFE",
			name: "City",
			data: [597, 203, 165, 89, 12]
		}]
	});
}

if ($('#privacy-chart').length) {
	Highcharts.chart('privacy-chart', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: "pie"
		},

		title: {
			text: "Privacy of Followers"
		},

		tooltip: {
			pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
		},

		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: "pointer",
				dataLabels: {
					enabled: true
				},
				showInLegend: true
			}
		},

		series: [{
			dataLabels: {
				color: "white",
				distance: -35,
				formatter: function () {
					if (this.percentage !== 0) {
						return setNumberPrecision(this.percentage, 2) + "%"
					}
				}
			},
			name: "Privacy of Followers",
			colorByPoint: true,
			innerSize: "50%",
			data: [{
				name: "Private",
				color: "#328FFE",
				y: 53.4
			}, {
				name: "Public",
				color: "#F6AF6D",
				y: 46.6
			}],
		}]
	});
}

if ($('#business-chart').length) {
	Highcharts.chart('business-chart', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: "pie"
		},

		title: {
			text: "Business vs Non Business Account"
		},

		tooltip: {
			pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
		},

		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: "pointer",
				dataLabels: {
					enabled: true
				},
				showInLegend: true
			}
		},

		series: [{
			dataLabels: {
				color: "white",
				distance: -35,
				formatter: function () {
					if (this.percentage !== 0) {
						return setNumberPrecision(this.percentage, 2) + "%"
					}
				}
			},
			name: "Business vs Non Business Account",
			colorByPoint: true,
			innerSize: "50%",
			data: [{
				name: "Business Accounts",
				color: "#328FFE",
				y: 63.2
			}, {
				name: "Non Business Accounts",
				color: "#F6AF6D",
				y: 36.8
			}],
		}]
	});
}

if ($('#age-chart').length) {
	Highcharts.chart('age-chart', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: "pie"
		},

		title: {
			text: "Audience Age"
		},

		tooltip: {
			pointFormat: "{series.name}: {point.y} <b>({point.percentage:.1f} %)</b>"
		},

		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: "pointer",
				colors: pieColors,
				dataLabels: {
					enabled: true
				},
				showInLegend: true
			}
		},

		series: [{
			dataLabels: {
				color: "white",
				distance: -35
			},
			name: "Audience Age",
			colorByPoint: true,
			innerSize: "50%",
			data: [{
				name: "13-17",
				y: 371
			}, {
				name: "18-24",
				y: 527
			}, {
				name: "25-34",
				y: 509
			}, {
				name: "35-44",
				y: 107
			}, {
				name: "45-54",
				y: 129
			}, {
				name: "55-64",
				y: 106
			}, {
				name: "65+",
				y: 31
			}]
		}]
	});
}

if ($('#age-by-gender-chart').length) {
	Highcharts.chart('age-by-gender-chart', {
		chart: {
			type: "bar"
		},

		title: {
			text: "Audience Age by Gender"
		},

		xAxis: [{
			categories: ageCategories,
			reversed: false,
			labels: {
				step: 1
			}
		}, { // Mirror axis on right side
			opposite: true,
			reversed: false,
			categories: ageCategories,
			linkedTo: 0,
			labels: {
				step: 1
			}
		}],

		yAxis: {
			title: {
				text: null
			},
			labels: {
				formatter: function () {
					return Math.abs(this.value)
				}
			}
		},

		plotOptions: {
			series: {
				stacking: "normal"
			},
			bar: {
				dataLabels: {
					enabled: true,
					formatter: function () {
						return Math.abs(this.point.y);
					}
				}
			}
		},

		tooltip: {
			formatter: function () {
				return "<b>" + this.series.name + ", age " + this.point.category + "</b><br/>" +
					"Population: " + setNumberPrecision(Math.abs(this.point.y), 0)
			}
		},

		series: [{
			name: "Male",
			color: "#328FFE",
			data: [
				-351,
				-559,
				-449,
				-109,
				-143,
				-146,
				-65
			]
		}, {
			name: "Female",
			color: "#F6AF6D",
			data: [
				371,
				527,
				509,
				107,
				129,
				106,
				31
			]
		}]
	});
}

let analytics = [];
let cnt = 0;

for (let i = 1000; i < 7000; i += getRandomInt(10, 300)) {
	analytics.push({
		followers: i + getRandomInt(0, 100),
		following: i - getRandomInt(1000, 2000),
		media_count: getRandomInt(10, 250),
		usertags_count: getRandomInt(10, 100),
		created_at: new Date(2019, cnt++, 6)
	});
}

let jsonfile = {
	"obj": analytics
};

let labels = jsonfile.obj.map(function (e) {
	return e.created_at;
});

let data = jsonfile.obj.map(function (e) {
	return e.followers;
});

let data2 = jsonfile.obj.map(function (e) {
	return e.following;
});

let data3 = jsonfile.obj.map(function (e) {
	return e.media_count;
});

let data4 = jsonfile.obj.map(function (e) {
	return e.usertags_count;
});

let followers_data = [];
let following_data = [];
let media_count_data = [];
let usertags_count_data = [];

for (let i = 0; i < data.length; i++) {
	followers_data.push([Date.parse(labels[i]), data[i]]);
	following_data.push([Date.parse(labels[i]), data2[i]]);
	media_count_data.push([Date.parse(labels[i]), data3[i]]);
	usertags_count_data.push([Date.parse(labels[i]), data4[i]]);
}

if ($('#reach-chart').length) {
	Highcharts.stockChart('reach-chart', {
		rangeSelector: {
			selected: 4
		},
		title: {
			text: 'Followers vs Following'
		},
		legend: {
			enabled: true,
			layout: 'horizontal'
		},
		plotOptions: {
			series: {
				marker: {
					radius: 5,
					enabled: true
				},
				allowPointSelect: true
			},
			line: {
				dataLabels: {
					enabled: true
				},
				enableMouseTracking: true
			}
		},
		series: [{
			name: 'Followers',
			data: followers_data,
			lineWidth: 3,
			color: '#e53935',
			tooltip: {
				valueDecimals: 0
			},
			marker: {
				enabled: true,
				radius: 3
			}
		}, {
			name: 'Following',
			data: following_data,
			lineWidth: 3,
			color: '#1565c0',
			tooltip: {
				valueDecimals: 0
			}
		}, {
			name: 'Media Count',
			data: media_count_data,
			lineWidth: 3,
			color: '#00c853',
			tooltip: {
				valueDecimals: 0
			}
		}, {
			name: 'Usertags Count',
			data: usertags_count_data,
			lineWidth: 3,
			color: '#ff6f00',
			tooltip: {
				valueDecimals: 0
			}
		}]
	});
}

if ($('#engagement-chart').length) {
	Highcharts.chart('engagement-chart', {
		chart: {
			type: "column"
		},

		title: {
			text: "Engagement of Total Followers"
		},

		legend: {
			enabled: false
		},

		xAxis: {
			categories: ["11th Jan", "14th Jan", "18th Jan", "21st Jan", "25th Jan", "28th Jan", "18th Feb"]
		},

		yAxis: {
			min: 0,
			title: {
				text: "Followers"
			}
		},

		tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y}</b></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true
		},

		plotOptions: {
			column: {
				pointPadding: 0.2,
				borderWidth: 0,
				dataLabels: {
					enabled: true
				}
			}
		},

		series: [{
			name: "Followers",
			color: "#43a047",
			data: [132, 121, 441, 111, 213, 3232, 424]
		}]
	});
}

if ($('#profile-visits-chart').length) {
	Highcharts.chart('profile-visits-chart', {
		chart: {
			type: "column"
		},

		title: {
			text: "Profile Visits of Total Followers"
		},

		legend: {
			enabled: false
		},

		xAxis: {
			categories: ["11th Jan", "14th Jan", "18th Jan", "21st Jan", "25th Jan", "28th Jan", "18th Feb"]
		},

		yAxis: {
			min: 0,
			title: {
				text: "Followers"
			}
		},

		tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y}</b></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true
		},

		plotOptions: {
			column: {
				pointPadding: 0.2,
				borderWidth: 0,
				dataLabels: {
					enabled: true
				}
			}
		},

		series: [{
			name: "Followers",
			color: "#f44336",
			data: [132, 121, 441, 111, 213, 322, 424]
		}]
	});
}

if ($('#hashtags-chart').length) {
	Highcharts.chart('hashtags-chart', {
		chart: {
			type: "line"
		},

		title: {
			text: "Hashtags of Total Followers"
		},

		legend: {
			enabled: false
		},

		xAxis: {
			categories: ["11th Jan", "14th Jan", "18th Jan", "21st Jan", "25th Jan", "28th Jan", "18th Feb"]
		},

		yAxis: {
			min: 0,
			title: {
				text: "Followers"
			}
		},

		tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y}</b></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true
		},

		plotOptions: {
			column: {
				pointPadding: 0.2,
				borderWidth: 0,
				dataLabels: {
					enabled: true
				}
			}
		},

		series: [{
			name: "Followers",
			color: "#ff9800",
			data: [132, 121, 441, 111, 213, 322, 124]
		}]
	});
}

let heatmapArray = [];

for (let i = 0; i <= 23; i++) {
	for (let j = 0; j <= 6; j++) {
		heatmapArray.push([i, j, getRandomInt(10, 300)]);
	}
}

if ($('#best-time-to-post-chart').length) {
	Highcharts.chart('best-time-to-post-chart', {
		chart: {
			type: "heatmap"
		},

		title: {
			text: "Best Time to Post"
		},

		xAxis: {
			categories: [
				"12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am",
				"12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"
			]
		},

		yAxis: {
			categories: ["Sun", "Sat", "Fri", "Thu", "Wed", "Tue", "Mon"],
			title: null
		},

		colorAxis: {
			min: 0,
			minColor: "#fefefe",
			maxColor: "#328FFE"
		},

		tooltip: {
			formatter: function () {
				return "<b>" + this.point.value + "</b> interactions at <br><b>" + this.series.xAxis.categories[this.point.x]
					+ "</b> on <br><b>" + "</b><br><b>" + this.series.yAxis.categories[this.point.y] + "</b>"
			}
		},

		series: [{
			name: "Best Time to Post",
			borderWidth: 0.5,
			data: heatmapArray,
			dataLabels: {
				enabled: false
			}
		}]
	});
}
