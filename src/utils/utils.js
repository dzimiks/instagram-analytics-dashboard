// /**
//  * Returns a random integer between min (inclusive) and max (inclusive).
//  * The value is no lower than min (or the next integer greater than min
//  * if min isn't an integer) and no greater than max (or the next integer
//  * lower than max if max isn't an integer).
//  * Using Math.round() will give you a non-uniform distribution!
//  */
// function getRandomInt(min, max) {
// 	min = Math.ceil(min);
// 	max = Math.floor(max);
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// /**
//  * Returns random float between min and max range with
//  * precision of decimal places.
//  *
//  * @param min
//  * @param max
//  * @param decimalPlaces
//  * @returns {number}
//  */
// function getRandomFloat(min, max, decimalPlaces) {
// 	let rand = Math.random() * (max - min) + min;
// 	let power = Math.pow(10, decimalPlaces);
// 	return Math.floor(rand * power) / power;
// }
//
// /**
//  * Returns number with given precision.
//  *
//  * @param value
//  * @param exp
//  * @returns {number}
//  */
// function setNumberPrecision(value, exp) {
// 	if (typeof exp === "undefined" || +exp === 0) {
// 		return Math.round(value);
// 	}
//
// 	value = +value;
// 	exp = +exp;
//
// 	if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
// 		return NaN;
// 	}
//
// 	// Shift
// 	value = value.toString().split("e");
// 	value = Math.round(+(value[0] + "e" + (value[1] ? (+value[1] + exp) : exp)));
//
// 	// Shift back
// 	value = value.toString().split("e");
// 	return +(value[0] + "e" + (value[1] ? (+value[1] - exp) : -exp));
// }
//
// /**
//  * Interpolates array.
//  *
//  * @param data
//  * @param fitCount
//  * @returns {Array}
//  */
// function interpolateArray(data, fitCount) {
// 	let linearInterpolate = function (before, after, atPoint) {
// 		return Math.ceil(before + (after - before) * atPoint);
// 	};
//
// 	let newData = [];
// 	let springFactor = Number((data.length - 1) / (fitCount - 1));
// 	newData[0] = data[0]; // for new allocation
//
// 	for (let i = 1; i < fitCount - 1; i++) {
// 		let tmp = i * springFactor;
// 		let before = Number(Math.floor(tmp)).toFixed();
// 		let after = Number(Math.ceil(tmp)).toFixed();
// 		let atPoint = tmp - before;
// 		newData[i] = linearInterpolate(data[before], data[after], atPoint);
// 	}
//
// 	newData[fitCount - 1] = data[data.length - 1]; // for new allocation
// 	return newData;
// }
//
// /**
//  * Interpolates timeseries array.
//  *
//  * @param data
//  * @param fitCount
//  * @returns {Array}
//  */
// function interpolateTimeseries(data, fitCount) {
// 	let linearInterpolate = function (before, after, atPoint) {
// 		return [before[0], Math.ceil(before[1] + (after[1] - before[1]) * atPoint)];
// 	};
//
// 	let newData = [];
// 	let springFactor = Number((data.length - 1) / (fitCount - 1));
// 	newData[0] = data[0][0]; // for new allocation
//
// 	for (let i = 1; i < fitCount - 1; i++) {
// 		let tmp = i * springFactor;
// 		let before = Number(Math.floor(tmp)).toFixed();
// 		let after = Number(Math.ceil(tmp)).toFixed();
// 		let atPoint = tmp - before;
// 		newData[i] = linearInterpolate(data[before], data[after], atPoint)[0];
// 	}
//
// 	newData[fitCount - 1] = data[data.length - 1][0]; // for new allocation
// 	return newData;
// }
//
// /**
//  * Get average of array.
//  *
//  * @param array
//  * @returns {number}
//  */
// const averageOfArray = (array) => array.reduce((a, b) => a + b) / array.length;
//
// /**
//  * Make monochrome colors
//  *
//  * @type {Array}
//  */
// const pieColors = (function () {
// 	let colors = [];
// 	let base = "#328FFE";
//
// 	for (let i = 0; i < 7; i++) {
// 		// Start out with a darkened base color (negative brighten), and end
// 		// up with a much brighter color
// 		colors.push(Highcharts.Color(base).brighten((i - 3) / 10).get());
// 	}
//
// 	return colors;
// }());
//
// module.exports = getRandomInt;
// module.exports = getRandomFloat;
// module.exports = setNumberPrecision;
// module.exports = getRandomInt;
// module.exports = getRandomInt;
// module.exports = getRandomInt;
