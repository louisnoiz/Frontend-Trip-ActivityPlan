<template>
  <div class="container is-widescreen">
    <section class="hero">
      <div class="hero-body">
        <p class="title">
          Your Trip
        </p>
        <div class="columns">
          <div class="column is-half">
            <input class="input" type="text" placeholder="Search Trip" />
          </div>
          <div class="column is-half">
            <button class="button">Search</button>
          </div>
        </div>
      </div>
      <div class="buttons is-right">
        <button class="button is-success" @click="test()">TEST</button>
        <button class="button is-info" @click="add()">Add Trip</button>
      </div>
    </section>
    <section class="section">
      <div class="content">
        <div class="columns">
          <div class="column">
            <div class="card has-background-link-light mb-5" v-for="(trip, index) in listTrip" :key="index">
              <div class="card-content">
                <p class="title">
                  {{ trip.name }}
                </p>
                <p class="subtitle">
                  This is trip have duration {{ trip.day.length }} day
                </p>
              </div>
              <footer class="card-footer">
                <a class="card-footer-item" @click="edit()">Edit</a>
                <a class="card-footer-item">Delete</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      listTrip: []
    }
  },
  mounted() {
    if (localStorage.getItem('trip') !== null){
      this.listTrip = JSON.parse(localStorage.getItem("trip"))
    }
    else{
      this.listTrip = []
      localStorage.setItem("trip", JSON.stringify(this.listTrip))
    }
  },
  unmounted() {
    localStorage.setItem("trip", JSON.stringify(this.listTrip));
  },
  methods: {
    test(){
      // localStorage.setItem("trip", JSON.stringify(this.listTrip));
      this.listTrip.push({
        name: "New",
        day: [
          {
            id:1,
            location: "123"
          }
        ]
      })
    },
    edit() {
      this.$router.push({path: "/updatetrip"})
    },
    add() {
      this.$router.push({path: "/addtrip"})
    },
    delete() {
      this.listTrip.map(() => {

      })
    }
  }
}
</script>