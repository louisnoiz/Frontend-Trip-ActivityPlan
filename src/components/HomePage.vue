<template>
  <div class="container is-widescreen">
    <section class="hero">
      <div class="hero-body">
        <p class="title">
          Your Trip
        </p>
      </div>
      <div class="buttons is-right">
        <button class="button is-info" @click="add()">Add Trip</button>
      </div>
    </section>
    <section class="section">
      <div class="content">
        <div class="columns">
          <div class="column">
            <div class="card has-background-link-light mb-5" v-for="(trip, index) in tripList" :key="index">
              <div class="card-content">
                <p class="title">
                  {{ trip.name }}
                </p>
                <p class="subtitle">
                  This is trip have duration {{ trip.days.length }} day
                </p>
              </div>
              <footer class="card-footer">
                <router-link class="card-footer-item" id='button' :to="`/updatetrip/${trip.name}`">Edit</router-link>
                <a class="card-footer-item" @click="del(trip.name)">Delete</a>
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
      tripList: []
    }
  },
  created() {
    const data = JSON.parse(localStorage.getItem("trip"))
    if (data) {
      this.tripList = data
    }
  },
  methods: {
    set() {
      localStorage.setItem("trip", JSON.stringify(this.tripList));
    },
    add() {
      this.$router.push({ path: "/addtrip" })
    },
    del(name) {
      this.tripList.filter((trip) => {
        return trip.name != name
      })
      console.log(this.tripList)
    }
  }
}
</script>