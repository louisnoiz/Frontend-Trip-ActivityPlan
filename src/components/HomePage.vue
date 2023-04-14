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
      listTrip: [
        {
          name: "Songkran Trip",
          day: [
            {
              id: 1,
              location: "aaa"
            },
            {
              id: 2,
              location: "bbb"
            }
          ]
        },
        {
          name: "Japan",
          day: [
            {
              id: 1,
              location: "aaa"
            }
          ]
        }
      ]
    }
  },
  methods: {
    edit() {
      this.$router.push({path: "/updatetrip"})
    }
  }
}
</script>