<template>
  <div class="home">
    <h1>Why is composting important?</h1>
    <p :class="weight">Food scraps and yard waste together currently make up more than 30 percent of what we throw away, and could be composted instead. Making compost keeps these materials out of landfills where they take up space and release methane, 
        a potent greenhouse gas. </p>
    <br/>
    <router-link to="/composting">Nearby Compost Locations</router-link>
    <p :class="weight">You can have a huge impact on the environment today by 
        properly composting waste.</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      weight: 'weight'
    }
  }
}
</script>
<style>
.weight {
  border-block-style: groove;
  color: darkblue;
  background-color: rgb(0, 218, 218);
  font-size: 25px;
}
</style>