import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import  firebase from 'firebase'
// import {Alert} from '@coreui/vue'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import '@coreui/dist/css/coreui.min.css'


const firebaseConfig = {
    apiKey: "AIzaSyBtZvawgSJY9TuWIewifqhZCUST6jhHnR8",
    authDomain: "vue-3-school-project.firebaseapp.com",
    projectId: "vue-3-school-project",
    storageBucket: "vue-3-school-project.appspot.com",
    messagingSenderId: "310669945582",
    appId: "1:310669945582:web:5e98cda7b034dfec3621ff",
    measurementId: "G-X3GHKKXKB9"
};
  
firebase.initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')
// createApp(App).use(Alert)

