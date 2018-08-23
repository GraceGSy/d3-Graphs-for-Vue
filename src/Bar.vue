<template>
	<!-- <rect fill="#6f99db" :width="width" :height="height" :x="xOffset" :y="yOffset"></rect> -->
	<g class="bar"></g>
</template>


<script>
import * as d3 from 'd3'

export default {
	props: {dimensions: {type: Array, default: () => []}},

	data () {
		return {
		};
	},
	methods: {
		draw: function() {
			console.log("call")
			let scale = this.scale
			let height = this.height
			d3.select(".bar").append("rect")
				.attr("height", 0)
		        .attr("width", this.width)
		        .attr("y", this.canvasHeight)
		        .attr("x", this.xOffset)
		        .attr("style", "fill:#709be0")
		        .transition()
		        .duration(1500)
		        .attr("height", this.height)
		        .attr("y", this.yOffset);
		}
	},
	mounted: function() {
		this.draw()
	},
	computed: {
		width: function() {
			return this.dimensions[0]
		},
		height: function() {
			return this.dimensions[1]
		},
		xOffset: function() {
			return this.dimensions[2]
		},
		yOffset: function() {
			return this.dimensions[3]
		},
		canvasHeight: function() {
			return this.dimensions[4]
		},
	},
}
</script>



<style>
</style>
