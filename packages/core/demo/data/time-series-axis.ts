import frLocaleObject from "date-fns/locale/fr/index";

// 15seconds
export const lineTimeSeriesData15seconds = {
	labels: ["Qty"],
	datasets: [
		{
			label: "Dataset 1",
			data: [
				{ date: new Date(2020, 11, 10, 23, 59, 15), value: 10 },
				{ date: new Date(2020, 11, 10, 23, 59, 30), value: 10 },
				{ date: new Date(2020, 11, 10, 23, 59, 45), value: 10 },
				{ date: new Date(2020, 11, 11, 0, 0, 0), value: 10 },
				{ date: new Date(2020, 11, 11, 0, 0, 15), value: 10 },
				{ date: new Date(2020, 11, 11, 0, 0, 30), value: 10 },
				{ date: new Date(2020, 11, 11, 0, 0, 45), value: 10 }
			]
		}
	]
};

export const lineTimeSeries15secondsOptions = {
	title: "Line (time series) - Time interval 15seconds",
	axes: {
		left: { secondary: true },
		bottom: {
			scaleType: "time",
			primary: true
		}
	}
};

// minute
export const lineTimeSeriesDataMinute = {
	labels: ["Qty"],
	datasets: [
		{
			label: "Dataset 1",
			data: [
				{ date: new Date(2020, 4, 21, 23, 40), value: 10 },
				{ date: new Date(2020, 4, 21, 23, 50), value: 10 },
				{ date: new Date(2020, 4, 21, 23, 55), value: 10 },
				{ date: new Date(2020, 4, 22, 0, 0), value: 10 },
				{ date: new Date(2020, 4, 22, 0, 5), value: 10 },
				{ date: new Date(2020, 4, 22, 0, 7), value: 10 },
				{ date: new Date(2020, 4, 22, 0, 10), value: 10 }
			]
		}
	]
};

export const lineTimeSeriesMinuteOptions = {
	title: "Line (time series) - Time interval minute",
	axes: {
		left: { secondary: true },
		bottom: {
			scaleType: "time",
			primary: true
		}
	}
};

// 30minutes
export const lineTimeSeriesData30minutes = {
	labels: ["Qty"],
	datasets: [
		{
			label: "Dataset 1",
			data: [
				{ date: new Date(2020, 11, 10, 23, 0), value: 10 },
				{ date: new Date(2020, 11, 10, 23, 30), value: 10 },
				{ date: new Date(2020, 11, 11, 0, 0), value: 10 },
				{ date: new Date(2020, 11, 11, 0, 30), value: 10 },
				{ date: new Date(2020, 11, 11, 1, 0), value: 10 },
				{ date: new Date(2020, 11, 11, 1, 30), value: 10 }
			]
		}
	]
};

export const lineTimeSeries30minutesOptions = {
	title: "Line (time series) - Time interval 30minutes",
	axes: {
		left: { secondary: true },
		bottom: {
			scaleType: "time",
			primary: true
		}
	}
};

// hourly with default ticks formats
export const lineTimeSeriesDataHourlyDefaultTicksFormats = {
	labels: ["Qty"],
	datasets: [
		{
			label: "Dataset 1",
			data: [
				{ date: new Date(2020, 11, 10, 22, 0), value: 10 },
				{ date: new Date(2020, 11, 10, 23, 0), value: 10 },
				{ date: new Date(2020, 11, 11, 0, 0), value: 10 },
				{ date: new Date(2020, 11, 11, 1, 0), value: 10 },
				{ date: new Date(2020, 11, 11, 2, 0), value: 10 },
				{ date: new Date(2020, 11, 11, 3, 0), value: 10 },
				{ date: new Date(2020, 11, 11, 4, 0), value: 10 }
			]
		}
	]
};

export const lineTimeSeriesHourlyDefaultLocaleOptions = {
	title: "Line (time series) - Time interval hourly with default ticks formats ('MMM d, hh a' and 'hh a')",
	axes: {
		left: { secondary: true },
		bottom: {
			scaleType: "time",
			primary: true
		}
	}
};

// hourly with custom ticks formats
export const lineTimeSeriesDataHourlyCustomTicksFormats = lineTimeSeriesDataHourlyDefaultTicksFormats;

export const lineTimeSeriesHourlyCustomTicksFormatsOptions = {
	title: "Line (time series) - Time interval hourly with custom ticks formats ('MMM d, HH:mm' and 'HH:mm')",
	axes: {
		left: { secondary: true },
		bottom: {
			scaleType: "time",
			primary: true,
		},
	},
	timeScale: {
		timeIntervalFormats: {
			hourly: { primary: "MMM d, HH:mm", secondary: "HH:mm" }
		}
	}
};

// daily
export const lineTimeSeriesDataDaily = {
	labels: ["Qty"],
	datasets: [
		{
			label: "Dataset 1",
			data: [
				{ date: new Date(2019, 11, 30), value: 10 },
				{ date: new Date(2019, 11, 31), value: 10 },
				{ date: new Date(2020, 0, 1), value: 10 },
				{ date: new Date(2020, 0, 2), value: 10 },
				{ date: new Date(2020, 0, 3), value: 10 },
				{ date: new Date(2020, 0, 4), value: 10 },
				{ date: new Date(2020, 0, 5), value: 10 }
			]
		}
	]
};

export const lineTimeSeriesDailyOptions = {
	title: "Line (time series) - Time interval daily",
	axes: {
		left: { secondary: true },
		bottom: {
			scaleType: "time",
			primary: true
		}
	}
};

// weekly
export const lineTimeSeriesDataWeekly = {
	labels: ["Qty"],
	datasets: [
		{
			label: "Dataset 1",
			data: [
				{ date: new Date(2019, 11, 30), value: 10 },
				{ date: new Date(2019, 11, 31), value: 10 },
				{ date: new Date(2020, 0, 1), value: 10 },
				{ date: new Date(2020, 0, 2), value: 10 },
				{ date: new Date(2020, 0, 3), value: 10 },
				{ date: new Date(2020, 0, 4), value: 10 },
				{ date: new Date(2020, 0, 5), value: 10 }
			]
		}
	]
};

export const lineTimeSeriesWeeklyOptions = {
	title: "Line (time series) - Time interval weekly",
	axes: {
		left: { secondary: true },
		bottom: {
			scaleType: "time",
			primary: true,
		},
	},
	timeScale: {
		showDayName: true
	}
};

// monthly with default locale
export const lineTimeSeriesDataMonthlyDefaultLocale = {
	labels: ["Qty"],
	datasets: [
		{
			label: "Dataset 1",
			data: [
				{ date: new Date(2018, 9), value: 10 },
				{ date: new Date(2018, 10), value: 10 },
				{ date: new Date(2018, 11), value: 10 },
				{ date: new Date(2019, 0), value: 10 },
				{ date: new Date(2019, 1), value: 10 },
				{ date: new Date(2019, 2), value: 10 },
				{ date: new Date(2019, 3), value: 10 }
			]
		}
	]
};

export const lineTimeSeriesMonthlyDefaultLocaleOptions = {
	title: "Line (time series) - Time interval monthly with default locale",
	axes: {
		left: { secondary: true },
		bottom: {
			scaleType: "time",
			primary: true
		}
	}
};

// monthly with custom locale
export const lineTimeSeriesDataMonthlyCustomLocale = lineTimeSeriesDataMonthlyDefaultLocale;

export const lineTimeSeriesMonthlyCustomLocaleOptions = {
	title: "Line (time series) - Time interval monthly with custom locale (fr)",
	axes: {
		left: { secondary: true },
		bottom: {
			scaleType: "time",
			primary: true
		}
	},
	timeScale: {
		localeObject: frLocaleObject
	}
};

// quarterly
export const lineTimeSeriesDataQuarterly = {
	labels: ["Qty"],
	datasets: [
		{
			label: "Dataset 1",
			data: [
				{ date: new Date(2017, 0), value: 10 },
				{ date: new Date(2017, 3), value: 10 },
				{ date: new Date(2017, 6), value: 10 },
				{ date: new Date(2017, 9), value: 10 },
				{ date: new Date(2018, 0), value: 10 },
				{ date: new Date(2018, 3), value: 10 },
				{ date: new Date(2018, 6), value: 10 }
			]
		}
	]
};

export const lineTimeSeriesQuarterlyOptions = {
	title: "Line (time series) - Time interval quarterly",
	axes: {
		left: { secondary: true },
		bottom: {
			scaleType: "time",
			primary: true
		}
	}
};

// yearly
export const lineTimeSeriesDataYearly = {
	labels: ["Qty"],
	datasets: [
		{
			label: "Dataset 1",
			data: [
				{ date: new Date(1977, 0), value: 10 },
				{ date: new Date(1978, 0), value: 10 },
				{ date: new Date(1979, 0), value: 10 },
				{ date: new Date(1980, 0), value: 10 },
				{ date: new Date(1981, 0), value: 10 },
				{ date: new Date(1982, 0), value: 10 },
				{ date: new Date(1983, 0), value: 10 }
			]
		}
	]
};

export const lineTimeSeriesYearlyOptions = {
	title: "Line (time series) - Time interval yearly",
	axes: {
		left: { secondary: true },
		bottom: {
			scaleType: "time",
			primary: true
		}
	}
};

export const lineTimeSeriesDataSingleDatum = {
	labels: ["Qty"],
	datasets: [
		{
			label: "Dataset 1",
			data: [
				{ date: new Date("2020-01-06T19:43:16Z"), value: 10 }
			]
		}
	]
};

export const lineTimeSeriesSingleDatumOptions = {
	title: "Line (time series) - Single datum",
	axes: {
		left: { secondary: true },
		bottom: {
			scaleType: "time",
			primary: true
		}
	}
};
