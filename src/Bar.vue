<template>
	<g ref="bar"></g>
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
			console.log("bar")
			let scale = this.scale
			let height = this.height
			let b = d3.select(this.$refs.bar)
			b.append("rect")
				.attr("height", 0)
		        .attr("width", this.width)
		        .attr("y", this.canvasHeight)
		        .attr("x", this.xOffset)
		        .attr("style", "fill:#709be0")
		        .transition()
		        .duration(1500)
		        .attr("height", this.height)
		        .attr("y", this.yOffset);
		    let barText = b.append("text")
		    	.attr("font-family", "sans-serif")
		        .attr("font-size", "12")
		        .attr("fill", "white")
		        .text(this.label)
		    let boxWidth = barText.node().getBBox().width
		    let textOffset = this.xOffset + this.width/2 - boxWidth/2
		    barText.attr("y", this.canvasHeight + 20)
		        .attr("x", textOffset)
		        .transition()
		        .duration(1500)
		        .attr("y", this.yOffset + 20);
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
		label: function() {
			return this.dimensions[5]
		},
	},
}
</script>



<style>
</style>
