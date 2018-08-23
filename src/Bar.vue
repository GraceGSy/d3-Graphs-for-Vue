<template>
	<rect :width="width" :height="height" :x="xOffset" :y="yOffset"></rect>
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
		scale: function(n) {
			return n*15
		}
	},
	computed: {
		width: function() {
			return this.dimensions[0];
		},
		height: function() {
			return this.dimensions[1];
		},
		xOffset: function() {
			return this.dimensions[2];
		},
		yOffset: function() {
			return this.dimensions[3];
		},
	},
}
</script>



<style>

</style>
