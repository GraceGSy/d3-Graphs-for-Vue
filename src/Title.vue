<template>
	<g ref="title"></g>
</template>


<script>
import * as d3 from 'd3'

export default {
	props: {text: {type: String, default: ""}, topMargin: {type: Number, default: 50}, canvasWidth: {type: Number}},

	data () {
		return {
		};
	},
	methods: {
		draw: function() {
			let b = d3.select(this.$refs.title)
		    let titleText = b.append("text")
		    	.attr("font-family", "sans-serif")
		        .attr("font-size", "12")
		        .attr("fill", "black")
		        .text(this.text)
		    let titleWidth = titleText.node().getBBox().width
		    let textOffset = (this.canvasWidth - titleWidth)/2
		    titleText.attr("y", this.topMargin)
		        .attr("x", textOffset)
		}
	},
	mounted: function() {
		this.draw()
	},
	computed: {
	},
}
</script>



<style>
</style>
