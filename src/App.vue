<template>
  <histogram :data="data"></histogram>
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
      for (var i = 0; i < 100; i++) {
        random.push(Math.floor((Math.random() * 100) + 1));
      }
      return random;
    },
  }, 
}
</script>

<style>

</style>
