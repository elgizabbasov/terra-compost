<template>
  <div class="composting">
    <h1>Compost Facilities in Canada</h1>
    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1dTyVORAeRNJc5kPjsUH5LXsM6DzrUPrs" width="640" height="480"></iframe>
  </div>
  <div>
    <p :class="weight">Click the pins on the map to get detailed information about the compost centre.
    </p></div>
</template>

<script>
// @ is an alias to /src
export default {
  data () {
    return {
      weight: 'weight'
    }
  }
}
</script>
<style scoped>
.weight {
  padding: 20px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  color: darkblue;
  font-size: 25px;
}
</style>