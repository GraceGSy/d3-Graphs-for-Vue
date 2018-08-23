<template>
	<div>{{ bins }}
		<svg class="hist-canvas" width="1000" height="500"></svg>
	</div>
</template>


<script>
import * as d3 from 'd3'

export default {
	props:["data"],

	data () {
		return {
			width: 1000,
			height: 500,
		};
	},
	methods: {
	},
	computed: {
		min: function() {
			return d3.min(this.data);
		},
		max: function() {
			return d3.max(this.data);
		},
		x: function() {
			return d3.scaleLinear()
			    .domain(d3.extent(this.data)).nice()
			    .range(0, this.width);
		},
		y: function() {
			let bins = this.bins;
			return d3.scaleLinear()
			    .domain([0, d3.max(bins, d => d.length)]).nice()
			    .range(this.height);
		},
		bins: function() {
			var binNumbers = 4;
			let x = this.x;
			var bins = d3.histogram()
				    .domain(x.domain())
				    .thresholds(x.ticks(binNumbers))
				  (this.data)
			console.log(bins);
			return bins;
		}
	}
}
</script>



<style>

</style>
