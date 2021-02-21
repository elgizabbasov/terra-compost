<template>
  <div class="home">
    <h1>Welcome {{name}}!</h1>
    <router-link to="/about">About</router-link>
    <br/>
    <router-link to="/composting">Nearby Compost Locations</router-link>
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
      Logout
    }
  }
}
</script>
