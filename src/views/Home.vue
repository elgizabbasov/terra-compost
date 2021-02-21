<template>
  <div class="home">
    <h1>Welcome {{name}}!</h1>
    <p :class="weight"><router-link to="/about">About</router-link></p>
    <br/>
    <p :class="weight"><router-link to="/composting">Nearby Compost Locations</router-link></p>
    <br/>
    <button class="logout" @click="Logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase';
import {ref, onBeforeMount} from 'vue';
export default {
  setup() {
    const user = firebase.auth().currentUser;

    const name = ref("");

    onBeforeMount(() => {
      if(user) {
        name.value = user.email.split('@')[0];
      }
    });

    const Logout = () => {
      firebase.auth().signOut();
    }
    return {
      name,
      weight: 'weight',
      Logout
    }
  }
}
</script>

<style>
.weight {
  padding: 20px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  color: darkblue;
  font-size: 25px;
}
.logout {

  width: 80px;
  height: 30px;
  left: 362px;
  top: 518px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

}
</style>