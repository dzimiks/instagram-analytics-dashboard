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
