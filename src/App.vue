<template>
<div id="wrapper">
  <nav class="navbar has-background-warning-light" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://www.google.co.th">
      <img src="https://cdn-icons-png.flaticon.com/512/2792/2792918.png" >
      <a class="navbar-item is-size-5">ActivityPlan</a>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      
    </div>

    <div class="navbar-end">
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
<Home/>
</div>

</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Home
  },
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#wrapper {
  width: auto;
  height: 100%;
  background-color: rgb(183, 154, 131);
  background-image: linear-gradient(rgb(231, 234, 199), rgb(196, 236, 238), rgb(210, 246, 177));
  height: 100%;
}
</style>
