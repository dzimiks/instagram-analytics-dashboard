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