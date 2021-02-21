<template>
  <div class="about">
    <h1>About</h1>
    <p :class="weight">Welcome to Terra! Here you are able to register simply with your email and receive
        updates on your contribution to our planet home.
    </p>
    <p><router-link to="/importance">Why is composting so important?</router-link></p>
  </div>
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
  border-block-style: groove;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  color: darkblue;
  font-size: 25px;
}
</style>