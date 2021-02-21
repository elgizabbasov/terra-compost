<template>
  <div class="login">
    <h1>Login to Terra</h1>
    <p :class="weight">Locate and learn about nearby compost centers!</p>
      <form @submit.prevent="Login">
        <input type="text" class="input-css" placeholder="Email" v-model="email"/>
        <br />
        <input type="password" class="input-css" placeholder="Password" v-model="password"/>
        <br />
        <br />
        <input type="submit" class="login-css" value="Login"/>
        <p :class="weight">Need an account? <router-link to="/register">Register Here</router-link></p>
      </form>
  </div>
</template>

<script>
import {ref} from 'vue';
import firebase from 'firebase';
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const Login = () => {
      firebase.auth().signInWithEmailAndPassword(email.value, password.value).then(data => console.log(data)).catch(error => alert(error.message));
    }

    return {
      Login,
      email,
      password,
      weight: 'weight'
    }
  }

}
</script>

<style lang="scss" scoped>
.weight {
  padding: 20px;
  border-block-style: groove;
  background-color: rgb(0, 218, 218);
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
}
.input-css {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 100, 156, 0.5);
}
.login-css{
  width: 70px;
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