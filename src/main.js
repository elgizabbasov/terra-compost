import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAE5a8qCyl2AGNmt2KhqasRqSJ1XulGbKM",
    authDomain: "vancouver-compost.firebaseapp.com",
    projectId: "vancouver-compost",
    storageBucket: "vancouver-compost.appspot.com",
    messagingSenderId: "651151227737",
    appId: "1:651151227737:web:c91f0e78f652a5ed0daa48",
    measurementId: "G-V8D4JJMRJT"
  };
  firebase.initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
