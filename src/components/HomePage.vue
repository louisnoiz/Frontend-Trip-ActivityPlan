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
                <router-link class="card-footer-item" id='button' :to="`/tripdetail/${trip.name}`">Detail</router-link>
                <router-link class="card-footer-item" id='button' :to="`/updatetrip/${trip.name}`">Edit</router-link>
                <a class="card-footer-item" @click="del(trip.name)">Delete</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="modal" :class="{ 'is-active': showModal }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Trip</p>
        <button class="delete" aria-label="close" @click="showModal = false"></button>
      </header>
      <section class="modal-card-body">
        Are You Sure To Delete Trip: {{ selectDel }}
      </section>
      <footer class="modal-card-foot">
        <button class="button is-danger" @click="confirmDel()">Delete</button>
        <button class="button" @click="showModal = false">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      showModal: false,
      selectDel: "",
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
      this.showModal = true
      this.selectDel = name
    },
    confirmDel(){
      this.tripList = this.tripList.filter((trip) => {
        return trip.name != this.selectDel
      })
      this.set()
      this.showModal = false
    }
  }
}
</script>