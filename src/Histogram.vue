<template>
	
	<svg class="histogram" width="500" height="250">
		<bar v-for="bar in bars" :dimensions="bar"></bar>
	</svg>
	
</template>


<script>
import * as d3 from 'd3'
import Bar from './Bar.vue'

export default {
	props: {data: {type: Array, default: () => []}, binNumber: {type: Number}},

	data () {
		return {
			width: 500,
			height: 250,
			barWidth: 25,
			spaceAround: 5,
		};
	},
	components: {
		bar: Bar,
	},
	methods: {
		binHeight: function(bins) {
			return bins.map(x => (x.length * 10));
		},
		xOffset: function(bins) {
			return bins.map((x, i) => i * (this.barWidth + this.spaceAround));
		},
		yOffset: function(binHeights) {
			return binHeights.map(x => (this.height - x));
		},
	},
	computed: {
		min: function() {
			return d3.min(this.data);
		},
		max: function() {
			return d3.max(this.data);
		},
		x: function() {
			let result = d3.scaleLinear()
				.domain(d3.extent(this.data)).nice()
				.range(0, this.width);
			console.log(result);
			return result;
		},
		y: function() {
			let bins = this.bins;
			return d3.scaleLinear()
				.domain([0, d3.max(bins, d => d.length)]).nice()
				.range(this.height);
		},
		bins: function() {
			let binNumber = this.binNumber;
			let x = this.x;
			let bins = d3.histogram()
					.domain(x.domain())
					.thresholds(x.ticks(binNumber))
				  (this.data)
			console.log(bins);
			return bins
		},
		bars: function() {
			let binHeights = this.binHeight(this.bins);
			let xOffsets = this.xOffset(this.bins);
			let yOffsets = this.yOffset(binHeights);
			return binHeights.map((e, i) => [this.barWidth, e, xOffsets[i], yOffsets[i], this.height]);
		}
	},
	// created: function() {
	// 		console.log("here");
	// 		var bars = d3.select(".histogram").selectAll("g")
	// 			.data(this.data)
	// 		  .enter().append("g")
	// 			.attr("transform", function(d, i) {return "translate("+i*this.barWidth+", 0)";});
	// 		bars.append("rect")
	// 		  .attr("height", 0)
	// 		  .attr("width", this.barWidth-2)
	// 		  .attr("y", this.height)
	// 		  .attr("style", "fill:#709be0")
	// 		  .transition()
	// 		  .duration(1500)
	// 		  .attr("height", function(d) {return this.scale(d);})
	// 		  .attr("y", function(d) {return this.height - this.scale(d);});
			// var texts = bars.append("text")
			//   .attr("font-family", "sans-serif")
			//   .attr("font-size", "12")
			//   .attr("fill", "white")
			//   .text(function (d) {return d;});
		
  	// }
}
</script>



<style>

</style>
