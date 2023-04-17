<template>
  <div id="wrapper">
    <nav class="navbar has-background-warning-light" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="https://cdn-icons-png.flaticon.com/512/2792/2792918.png">
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
            <RouterLink to="/">Home</RouterLink>
          </a>

          <a class="navbar-item">
            <router-link to="/addtrip">CreateTrip</router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/updatetrip">UpdateTrip</router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/tripdetail">DetailTrip</router-link>
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
    <router-view :key="$route.fullPath" />
  </div>
</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'

import { RouterLink } from 'vue-router';

export default {
  name: 'App',
  components: {
    RouterLink
  },
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300&family=Prompt:wght@200;300;500&display=swap');

#app {
  font-family: 'Noto Sans Thai', sans-serif;
  font-family: 'Prompt', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#wrapper {
  width: 100vw;
  height: auto;
  background-color: rgb(183, 154, 131);
  background-size: auto 100%;
  background-image: linear-gradient(rgb(254, 254, 236), rgb(218, 247, 248), rgb(220, 239, 202));
}
</style>
