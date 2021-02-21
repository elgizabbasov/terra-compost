<template>
  <div class="register">
    <h1>Register</h1>
      <form @submit.prevent="Register">
        <input type="text" class="input-css" placeholder="Email" v-model="email"/>
        <br />
        <input type="password" class="input-css" placeholder="Password" v-model="password"/>
        <br/>
        <br/>
        <input type="submit" class="register-css" value="Register"/>
        <p :class="weight">Have an account? <router-link to="/login">Login Here</router-link></p>
      </form>
  </div>
</template>

<script>
import firebase from 'firebase';
import {ref} from 'vue';
export default {
  setup(){
    const email = ref("");
    const password = ref("");

    const Register = () => {
      firebase.auth().createUserWithEmailAndPassword(email.value, password.value).then(user => {
          alert(user);
        }).catch(error => alert(error.message));
    }

    return {
      Register,
      email,
      password,
      weight: 'weight'
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
.register-css{
  width: 90px;
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