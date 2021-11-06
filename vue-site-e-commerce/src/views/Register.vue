<template>
  <div class="main-container">
    <div class="card-container">
      <h2 class="top">Créer un compte</h2>
      <form class="form" ref="form">
      
        <input class="input" placeholder="email" type="text" required 
        v-model="userEmail"
        @keyup.enter="register()"  
        aria-label="email"
        />

        <input
          class="input"
          placeholder="password"
          type="password"
          v-model="userPassword"
          @keyup.enter="register()"
          aria-label="password"
          required
        />

        <!-- {{ errors.login }} -->
        <p class="error"></p>
      </form>
      <button class="button abort" @click="abortRegister()">Annuler</button>
      <button class="button connect" @click="register()">Valider</button>
      <br />
      
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// const baseURL = "http://localhost:3001/users";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default {
  name:"Register",
  components: {
    //   'Header': Header,
  },
  
  props: {
    connected: { type: Boolean },
    errors: { type: Object }
  },
  data () {
    return {
      // users:[],
      // userName:"",
      userEmail:"",
      userPassword:""
    }
  },
  // async created() {
  //   try {
  //     const res = await axios.get(baseURL);

  //     this.users = res.data;
  //   } catch (e) {
  //     console.error(e);
  //   }
  // },
  // mounted () {
  //   if (this.connected) {
  //     router.push('/')
  //   }
  //   this.errors.register = ''
  // },
  
  methods: {
    register(){
      const auth= getAuth()
        createUserWithEmailAndPassword(auth, this.userEmail,this.userPassword)
        .then(() => {
          alert('successfully registered ! Please login.')
          this.$router.push('/Login')
        }).catch((error) => {
          alert(error.message)
        });
    },
    abortRegister() {
        this.userEmail=''
        this.userPassword=''
      }

      //   login() {
    //     if (this.$refs.form.checkValidity()) {
    //       this.$emit('login', this.loginInfos)
    //       console.log(this.loginInfos)
    //       this.errors.login = ''
    //     }
    //     else {
    //       this.errors.login = 'Remplissez tous les champs!'
    //     }
    //   }
  }

    

      
    
    
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}
.main-container {
  width: 100%;
  height: 100%;
  position: relative;
}
.card-container {
  position: absolute;
  background-color: #393e46;
  text-align: center;
  width: 500px;
  margin: 200px auto;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 350px;
  border-radius: 20px;
}
.top {
  background-color: #9daaf2;
  color: black;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px #eeeeee solid;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #393e46;
}
.input {
  width: 80%;
  height: 40px;
  margin: 10px;
  background-color: #eeeeee;
  border-radius: 10px;
  text-align: center;
  border: 3px solid #9daaf2;
}
.error {
  color: #ff6a3d;
  height: 30px;
  background-color: #393e46;
}
.button {
  text-decoration: none;
  color: #eeeeee;
  padding: 6px 60px;
  margin: 5px;
  transition: 0.3s ease;
  border: 1px solid #eeeeee;
  background-color: #232931;
}

.button:hover {
  color: black;
  border-radius: 10px;
  cursor: pointer;
}
.button.connect:hover {
  background-color: #4ecca3;
}
.button.abort:hover {
  background-color: #e5707e;
}
.bottom {
  background-color: #9daaf2;
  clip-path: polygon(100% 0, 100% 80%, 0 100%, 0% 20%);
  height: 40px;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.register {
  color: #eeeeee;
  text-decoration: none;
  top: 10px;
  background-color: #393e46;
}
.register:hover {
  text-decoration: underline;
}
</style>
