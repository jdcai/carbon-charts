import CcvSimpleBarChart from './ccv-simple-bar-chart.vue';
import CcvGroupedBarChart from './ccv-grouped-bar-chart.vue';
import CcvStackedBarChart from './ccv-stacked-bar-chart.vue';
import CcvBubbleChart from './ccv-bubble-chart.vue';
import CcvDonutChart from './ccv-donut-chart.vue';
import CcvLineChart from './ccv-line-chart.vue';
import CcvPieChart from './ccv-pie-chart.vue';
import CcvScatterChart from './ccv-scatter-chart.vue';

const components = [
	CcvSimpleBarChart,
	CcvGroupedBarChart,
	CcvStackedBarChart,
	CcvBubbleChart,
	CcvDonutChart,
	CcvLineChart,
	CcvPieChart,
	CcvScatterChart
];

/*
  Allows the module to be used as a Vue plug-in, and has an install()
  method (which is called when the plug-in loads) that registers all the
  components.
*/
export default {
	// options is an array of components to be registered
	// e.g. ['c-button', 'c-modal']
	install(Vue, options) {
		if (typeof options === 'undefined') {
			for (let c of components) {
				Vue.component(c.name, c);
			}
		} else {
			if (!(options instanceof Array)) {
				throw new TypeError('options must be an array');
			}

			for (let c of components) {
				// register only components specified in the options
				if (options.includes(c.name)) {
					Vue.component(c.name, c);
				}
			}
		}
	},
};

/*
  Allows import of individual components from the module, as an
  alternative to loading them all via a Vue plug-in.
*/
export {
	CcvSimpleBarChart,
	CcvGroupedBarChart,
	CcvStackedBarChart,
	CcvBubbleChart,
	CcvDonutChart,
	CcvLineChart,
	CcvPieChart,
	CcvScatterChart
};
