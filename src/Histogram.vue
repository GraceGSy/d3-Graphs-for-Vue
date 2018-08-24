<template>
	
	<svg class="histogram" width="550" height="300">
		<g>
			<graphTitle :text="title" :canvasWidth="width"></graphTitle>
			<bar v-for="bar in bars" :dimensions="bar"></bar>
			<axis v-for="axis in axes" :axisFeatures="axis"></axis>
		</g>
	</svg>
	
</template>


<script>
import * as d3 from 'd3'
import Bar from './Bar.vue'
import Axis from './Axis.vue'
import Title from './Title.vue'

export default {
	props: {data: {type: Array, default: () => []}, binNumber: {type: Number}, borderWidth: {type: Number, default: 25}},

	data () {
		return {
			width: 550,
			height: 300,
			spaceAround: 1,
			title: "Random Histogram",
		};
	},
	components: {
		bar: Bar,
		axis: Axis,
		graphTitle: Title,
	},
	methods: {
		binHeight: function(bins) {
			return bins.map(x => (x.length * 10));
		},
		binLabels: function(bins) {
			return bins.map(x => (x.length))
		},
		xOffset: function(bins) {
			return bins.map((x, i) => i * (this.barWidth + this.spaceAround) + this.borderWidth);
		},
		yOffset: function(binHeights) {
			return binHeights.map(x => (this.height - x - this.borderWidth));
		},
	},
	computed: {
		barWidth: function() {
			return this.graphWidth/this.binNumber - this.spaceAround;
		},
		graphWidth: function() {
			return this.width - (2 * this.borderWidth)
		},
		graphHeight: function() {
			return this.height - (2 * this.borderWidth)
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
			let binLabels = this.binLabels(this.bins);
			let xOffsets = this.xOffset(this.bins);
			let yOffsets = this.yOffset(binHeights);
			return binHeights.map((e, i) => [this.barWidth, e, xOffsets[i], yOffsets[i], this.height-this.borderWidth, binLabels[i]]);
		},
		axes: function() {
			let xAxisScale = d3.scaleLinear()
						  	.domain([0, 100])
						  	.range([0, this.graphWidth])
			let xAxisOffsets = [this.borderWidth, this.borderWidth + this.graphHeight]
			let yAxisScale = d3.scaleLinear()
							.domain([0, 50])
							.range([this.graphHeight, 0])
			let yAxisOffsets = [this.borderWidth, this.borderWidth]
			return [[xAxisScale, "Bottom", this.binNumber, xAxisOffsets], [yAxisScale, "Left", 5, yAxisOffsets]]
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
