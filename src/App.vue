<template>
  <histogram :data="data" :binNumber="10" :borderWidth="25"></histogram>
</template>

<script>
export default {
  data() {
    return {
      data: this.generateData(),
    }
  },
  methods: {
    generateData: function() {
      var random = [];
      for (var i = 0; i < 99; i++) {
        random.push(Math.floor((Math.random() * 99) + 1));
      }
      return random;
    },
  }, 
}
</script>

<style>

</style>
