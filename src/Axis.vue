<template>
	<g ref="axis"></g>
</template>


<script>
import * as d3 from 'd3'

export default {
	props: {axisFeatures: {type: Array, default: () => []}},

	data () {
		return {
		};
	},
	methods: {
		draw: function() {
			console.log("axis")
			d3.select(this.$refs.axis)
				.attr("transform", "translate(" + this.translateX + "," + this.translateY + ")")
				.call(this.axis)
		}
	},
	mounted: function() {
		this.draw()
	},
	computed: {
		scale: function() {
			return this.axisFeatures[0];
		},
		orientation: function() {
			return this.axisFeatures[1];
		},
		tickNumber: function() {
			return this.axisFeatures[2];
		},
		translateX: function() {
			return this.axisFeatures[3][0];
		},
		translateY: function() {
			return this.axisFeatures[3][1];
		},
		axis: function() {
			let orient = this.orientation
			if (orient == "left" || orient == "Left") {
				return d3.axisLeft().scale(this.scale).ticks(this.tickNumber);
			} else if (orient == "right" || orient == "Right") {
				return d3.axisRight().scale(this.scale).ticks(this.tickNumber);
			} else if (orient == "bottom" || orient == "Bottom") {
				return d3.axisBottom().scale(this.scale).ticks(this.tickNumber);
			} else if (orient == "top" || orient == "Top") {
				return d3.axisTop().scale(this.scale).ticks(this.tickNumber);
			} else {
				console.log("please indicate axis direction: 'left', 'right', 'top' or 'bottom'");
			}
			// switch (this.orientation) {
			// 	case "Left":
			// 		return d3.axisLeft().scale(this.scale).ticks(this.tickNumber);
			// 	case "Bottom":
			// 		return d3.axisBottom().scale(this.scale).ticks(this.tickNumber);
			// 	case "Right":
			// 		return d3.axisRight().scale(this.scale).ticks(this.tickNumber);
			// 	case "Top":
			// 		return d3.axisTop().scale(this.scale).ticks(this.tickNumber);
			// 	default:
			// 		console.log()
			// }
		},
	},
}
</script>



<style>
</style>
